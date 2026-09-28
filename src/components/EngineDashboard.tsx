import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { INITIAL_TABLES, INITIAL_TELEMETRY } from '../data/restaurantData';
import { TableStatus, SystemEvent } from '../types';

interface EngineDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, type?: 'info' | 'success' | 'error') => void;
}

export const EngineDashboard: React.FC<EngineDashboardProps> = ({ isOpen, onClose, onShowToast }) => {
  const [telemetry, setTelemetry] = useState(INITIAL_TELEMETRY);
  const [tables, setTables] = useState<TableStatus[]>(INITIAL_TABLES);
  const [isLiveActive, setIsLiveActive] = useState(true);
  const [activeTab, setActiveTab] = useState<'throughput' | 'tables' | 'db' | 'cellar'>('throughput');
  const [eventLogs, setEventLogs] = useState<SystemEvent[]>([
    {
      id: 'log-1',
      timestamp: '10:02:14.281',
      stage: '01. INGESTION',
      description: 'Edge middleware validated patron TLS token: Paris FR (PoP CDG-1)',
      status: 'success'
    },
    {
      id: 'log-2',
      timestamp: '10:02:14.304',
      stage: '02. SEAT MUTEX',
      description: 'Redis cluster acquired atomic lock table:T03 TTL=300s',
      status: 'success'
    },
    {
      id: 'log-3',
      timestamp: '10:02:14.418',
      stage: '03. GUARANTEE',
      description: 'Stripe SetupIntent pre-auth token authorized €200.00 idempotent key secured',
      status: 'success'
    },
    {
      id: 'log-4',
      timestamp: '10:02:14.442',
      stage: '04. PERSISTENCE',
      description: 'PostgreSQL ACID isolation level SERIALIZABLE commit hash tx_9A7B1C',
      status: 'success'
    }
  ]);

  // Real-time ticking telemetry interval
  useEffect(() => {
    if (!isLiveActive || !isOpen) return;

    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const randomTps = Math.floor(250 + Math.random() * 450);
      const randomLatency = Math.floor(12 + Math.random() * 15);
      const randomPool = Math.floor(10 + Math.random() * 18);
      const lockedCount = tables.filter((t) => t.status === 'locked').length;

      setTelemetry((prev) => {
        const next = [...prev.slice(1), {
          time: timeStr,
          tps: randomTps,
          latencyMs: randomLatency,
          dbPool: randomPool,
          redisLocks: lockedCount
        }];
        return next;
      });

      // Decrement locked table TTL
      setTables((prev) =>
        prev.map((tbl) => {
          if (tbl.status === 'locked' && tbl.lockTtlRemaining) {
            const nextTtl = tbl.lockTtlRemaining - 2;
            if (nextTtl <= 0) {
              return { ...tbl, status: 'available', lockTtlRemaining: undefined, patronName: undefined };
            }
            return { ...tbl, lockTtlRemaining: nextTtl };
          }
          return tbl;
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [isLiveActive, isOpen, tables]);

  if (!isOpen) return null;

  // Trigger high-concurrency surge test
  const triggerTrafficSpike = () => {
    onShowToast('Simulating monthly 10:00 CET drop: 2,800 req/sec surge incoming!', 'info');
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    setTelemetry((prev) => [
      ...prev.slice(1),
      {
        time: timeStr,
        tps: 2850,
        latencyMs: 64,
        dbPool: 48,
        redisLocks: 8
      }
    ]);

    // Lock a table synthetically
    setTables((prev) => {
      const availableTable = prev.find((t) => t.status === 'available');
      if (availableTable) {
        return prev.map((t) =>
          t.id === availableTable.id
            ? { ...t, status: 'locked', lockTtlRemaining: 300, patronName: 'Flash-Reservation Patron' }
            : t
        );
      }
      return prev;
    });

    const newLog: SystemEvent = {
      id: `log-${Date.now()}`,
      timestamp: now.toISOString().substring(11, 23),
      stage: '02. SEAT MUTEX',
      description: 'Go lock engine sustained 2,850 ops/sec; zero deadlocks recorded via PostgreSQL row locks.',
      status: 'success'
    };
    setEventLogs((prev) => [newLog, ...prev.slice(0, 14)]);
  };

  const cellarData = [
    { name: 'Bourgogne Grand Cru', value: 680, color: '#9a4522' },
    { name: 'Jura & Vin Jaune', value: 320, color: '#c76c00' },
    { name: 'Vallée du Rhône', value: 440, color: '#ffb59a' },
    { name: 'Champagne de Vignerons', value: 400, color: '#888380' }
  ];

  const dbConnectionMetrics = [
    { poolName: 'Write Master (Primary)', active: 18, idle: 32, max: 50 },
    { poolName: 'Read Replica 01 (Paris)', active: 24, idle: 26, max: 50 },
    { poolName: 'Read Replica 02 (Frankfurt)', active: 12, idle: 38, max: 50 }
  ];

  return (
    <div className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#1e1b19] border border-[#4a4643] rounded-2xl w-full max-w-6xl max-h-[94vh] flex flex-col text-[#f3f0eb] shadow-2xl overflow-hidden">
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#4a4643] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#262320]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h2 className="font-mono text-base sm:text-lg font-bold text-white tracking-wide">
                DIGITAL GASTRONOMY ENGINE // REAL-TIME TELEMETRY
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-[#31302d] text-[#ffb59a] rounded border border-[#7e7570]">
                React 19 + Recharts + Node.js + Postgres
              </span>
            </div>
            <p className="text-xs text-[#888380] font-mono mt-0.5">
              Zero-latency seat mutexes, sub-second TTFB, and ACID reservation persistence.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsLiveActive(!isLiveActive)}
              className={`px-3 py-1.5 rounded text-xs font-mono border transition-colors cursor-pointer ${
                isLiveActive
                  ? 'bg-[#2f1500] text-[#ffb59a] border-[#6e3900]'
                  : 'bg-[#31302d] text-[#888380] border-[#7e7570]'
              }`}
            >
              {isLiveActive ? '● Streaming (2s)' : '❚❚ Paused'}
            </button>
            <button
              onClick={triggerTrafficSpike}
              className="px-3 py-1.5 bg-[#9a4522] hover:bg-[#c76c00] text-white rounded text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
            >
              Simulate 2.8k Drop Surge
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#ccc5c2] hover:text-white hover:bg-[#31302d] rounded cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex px-6 pt-3 border-b border-[#4a4643] bg-[#221f1d] gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('throughput')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'throughput'
                ? 'border-[#ffb59a] text-white font-semibold'
                : 'border-transparent text-[#888380] hover:text-[#ccc5c2]'
            }`}
          >
            01. Throughput & Latency (TPS)
          </button>
          <button
            onClick={() => setActiveTab('tables')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'tables'
                ? 'border-[#ffb59a] text-white font-semibold'
                : 'border-transparent text-[#888380] hover:text-[#ccc5c2]'
            }`}
          >
            02. Redis Table Mutex Grid ({tables.filter((t) => t.status === 'locked').length} Active)
          </button>
          <button
            onClick={() => setActiveTab('db')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'db'
                ? 'border-[#ffb59a] text-white font-semibold'
                : 'border-transparent text-[#888380] hover:text-[#ccc5c2]'
            }`}
          >
            03. PostgreSQL Connection Pools
          </button>
          <button
            onClick={() => setActiveTab('cellar')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeTab === 'cellar'
                ? 'border-[#ffb59a] text-white font-semibold'
                : 'border-transparent text-[#888380] hover:text-[#ccc5c2]'
            }`}
          >
            04. Cellar Inventory Allocation
          </button>
        </div>

        {/* Main Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Key Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#31302d]/60 border border-[#4a4643] p-4 rounded-xl">
              <span className="text-[10px] font-mono text-[#888380] uppercase block">Current Throughput</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-mono font-bold text-white">
                  {telemetry[telemetry.length - 1]?.tps || 340}
                </span>
                <span className="text-xs font-mono text-[#ffb59a]">req / sec</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono mt-1 block">99.98% Edge Success</span>
            </div>

            <div className="bg-[#31302d]/60 border border-[#4a4643] p-4 rounded-xl">
              <span className="text-[10px] font-mono text-[#888380] uppercase block">P99 Edge Latency</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-mono font-bold text-white">
                  {telemetry[telemetry.length - 1]?.latencyMs || 16}
                </span>
                <span className="text-xs font-mono text-[#ffb59a]">ms TTFB</span>
              </div>
              <span className="text-[10px] text-[#888380] font-mono mt-1 block">Target &lt; 50ms</span>
            </div>

            <div className="bg-[#31302d]/60 border border-[#4a4643] p-4 rounded-xl">
              <span className="text-[10px] font-mono text-[#888380] uppercase block">Redis Distributed Mutexes</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-mono font-bold text-white">
                  {tables.filter((t) => t.status === 'locked').length}
                </span>
                <span className="text-xs font-mono text-[#ffb59a]">Tables On Hold</span>
              </div>
              <span className="text-[10px] text-[#888380] font-mono mt-1 block">TTL: 300s Auto-Release</span>
            </div>

            <div className="bg-[#31302d]/60 border border-[#4a4643] p-4 rounded-xl">
              <span className="text-[10px] font-mono text-[#888380] uppercase block">Postgres Isolation</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-lg font-mono font-bold text-emerald-400">SERIALIZABLE</span>
              </div>
              <span className="text-[10px] text-[#888380] font-mono mt-1 block">0 Duplicate Reservations</span>
            </div>
          </div>

          {/* TAB 1: Throughput Recharts Chart */}
          {activeTab === 'throughput' && (
            <div className="bg-[#262320] border border-[#4a4643] p-5 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-sm font-semibold text-white">
                    REAL-TIME INGESTION & LATENCY TIMELINE
                  </h3>
                  <p className="text-xs text-[#888380] font-mono">
                    Streams incoming HTTP requests and edge proxy response latency over 15-second windows.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#ffb59a]">Live Recharts Rendering</span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={telemetry} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="tpsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9a4522" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#9a4522" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffb59a" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ffb59a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#373432" />
                    <XAxis dataKey="time" stroke="#7e7570" fontSize={11} fontFamily="monospace" />
                    <YAxis stroke="#7e7570" fontSize={11} fontFamily="monospace" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e1b19',
                        borderColor: '#4a4643',
                        color: '#f3f0eb',
                        fontFamily: 'monospace',
                        fontSize: 12
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 11, fontFamily: 'monospace' }} />
                    <Area
                      type="monotone"
                      dataKey="tps"
                      name="Throughput (Req/Sec)"
                      stroke="#9a4522"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#tpsGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="latencyMs"
                      name="P99 Latency (ms)"
                      stroke="#ffb59a"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#latencyGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* TAB 2: Redis Table Mutex Grid */}
          {activeTab === 'tables' && (
            <div className="bg-[#262320] border border-[#4a4643] p-5 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-sm font-semibold text-white">
                    DISTRIBUTED TABLE MUTEX LOCK MATRIX
                  </h3>
                  <p className="text-xs text-[#888380] font-mono">
                    Each seat represents an atomic distributed lock in Redis. Locks auto-expire after 300 seconds if payment guarantee is abandoned.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-emerald-700"></span> Available</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-amber-600 animate-pulse"></span> Mutex Locked</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-[#9a4522]"></span> Committed</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {tables.map((table) => {
                  let badgeBg = 'bg-emerald-950 text-emerald-300 border-emerald-800';
                  let statusLabel = 'Available';

                  if (table.status === 'locked') {
                    badgeBg = 'bg-amber-950 text-amber-200 border-amber-700 animate-pulse';
                    statusLabel = `Locked (${table.lockTtlRemaining}s)`;
                  } else if (table.status === 'reserved' || table.status === 'seated') {
                    badgeBg = 'bg-[#4a2618] text-[#ffdbce] border-[#7b2f0c]';
                    statusLabel = 'Committed';
                  }

                  return (
                    <div
                      key={table.id}
                      className="p-3 bg-[#1e1b19] rounded-lg border border-[#4a4643] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-xs font-bold text-white">{table.id}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${badgeBg}`}>
                            {statusLabel}
                          </span>
                        </div>
                        <p className="text-xs text-[#ccc5c2] font-serif">{table.label}</p>
                        <p className="text-[10px] text-[#888380] font-mono mt-1">
                          Capacity: {table.capacity} · Section: {table.section}
                        </p>
                        {table.patronName && (
                          <p className="text-[11px] text-[#ffb59a] font-mono mt-1 truncate">
                            Holder: {table.patronName}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#31302d] flex justify-end">
                        {table.status === 'available' ? (
                          <button
                            onClick={() => {
                              setTables((prev) =>
                                prev.map((t) =>
                                  t.id === table.id
                                    ? { ...t, status: 'locked', lockTtlRemaining: 300, patronName: 'Simulated Patron' }
                                    : t
                                )
                              );
                              onShowToast(`Acquired Redis distributed mutex on ${table.id} for 300s.`);
                            }}
                            className="text-[10px] font-mono text-[#ffb59a] hover:underline cursor-pointer"
                          >
                            + Acquire Lock
                          </button>
                        ) : table.status === 'locked' ? (
                          <button
                            onClick={() => {
                              setTables((prev) =>
                                prev.map((t) =>
                                  t.id === table.id
                                    ? { ...t, status: 'available', lockTtlRemaining: undefined, patronName: undefined }
                                    : t
                                )
                              );
                              onShowToast(`Released mutex lock on ${table.id}.`);
                            }}
                            className="text-[10px] font-mono text-[#888380] hover:text-white cursor-pointer"
                          >
                            × Release Lock
                          </button>
                        ) : (
                          <span className="text-[10px] font-mono text-[#888380]">ACID Persisted</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: PostgreSQL Connection Pools BarChart */}
          {activeTab === 'db' && (
            <div className="bg-[#262320] border border-[#4a4643] p-5 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-sm font-semibold text-white">
                    POSTGRESQL CONNECTION POOLS & HEALTH
                  </h3>
                  <p className="text-xs text-[#888380] font-mono">
                    ACID transactional compliance ensured via PgBouncer pooling + Read Replicas.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">0 Deadlocks Detected</span>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dbConnectionMetrics} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#373432" />
                    <XAxis dataKey="poolName" stroke="#7e7570" fontSize={11} fontFamily="monospace" />
                    <YAxis stroke="#7e7570" fontSize={11} fontFamily="monospace" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e1b19',
                        borderColor: '#4a4643',
                        color: '#f3f0eb',
                        fontFamily: 'monospace',
                        fontSize: 12
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 11, fontFamily: 'monospace' }} />
                    <Bar dataKey="active" name="Active Query Clients" fill="#9a4522" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="idle" name="Idle Warm Pool" fill="#7e7570" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* TAB 4: Cellar Allocation PieChart */}
          {activeTab === 'cellar' && (
            <div className="bg-[#262320] border border-[#4a4643] p-5 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-sm font-semibold text-white">
                    CELLAR INVENTORY DISTRIBUTION (1,840 VINTAGES)
                  </h3>
                  <p className="text-xs text-[#888380] font-mono">
                    Real-time bottle stock allocation across benchmark biodynamic appellations.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#ffb59a]">Automated Sommelier Ledger</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="h-60 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cellarData}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={85}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {cellarData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1e1b19',
                          borderColor: '#4a4643',
                          color: '#f3f0eb',
                          fontFamily: 'monospace',
                          fontSize: 12
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {cellarData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-2 bg-[#1e1b19] rounded border border-[#373432]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></span>
                        <span>{item.name}</span>
                      </div>
                      <span className="font-bold text-white">{item.value} Bottles</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Live Distributed Transaction Log Stream */}
          <div className="bg-[#262320] border border-[#4a4643] p-5 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#ffb59a]">history</span>
                <span>Distributed Transaction Event Stream</span>
              </span>
              <button
                onClick={() => setEventLogs([])}
                className="text-[10px] font-mono text-[#888380] hover:text-white cursor-pointer"
              >
                Clear Stream
              </button>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {eventLogs.map((log) => (
                <div
                  key={log.id}
                  className="p-2.5 bg-[#1e1b19] rounded border border-[#373432] flex items-start justify-between gap-3 text-xs font-mono"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#31302d] text-[#ffb59a] border border-[#7e7570] shrink-0">
                      {log.stage}
                    </span>
                    <span className="text-[#ccc5c2] leading-tight">{log.description}</span>
                  </div>
                  <span className="text-[10px] text-[#7e7570] shrink-0">{log.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
