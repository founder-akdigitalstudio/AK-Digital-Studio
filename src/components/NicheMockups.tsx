import React from 'react';

export const CleanTechMockup: React.FC = () => (
  <div className="w-full h-full bg-[#ECFCCB]/40 rounded-xl p-3 flex flex-col justify-between overflow-hidden border border-[#A3E635]/40 select-none">
    {/* CleanTech browser mockup */}
    <div className="bg-white rounded-lg shadow-sm border border-[#D9F99D] p-2.5 space-y-2">
      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#84CC16]" />
          <span className="text-[10px] font-semibold text-slate-800">CircuRecycle Hub</span>
        </div>
        <span className="text-[8px] bg-[#F7FEE7] text-[#4D7C0F] px-1.5 py-0.5 rounded border border-[#BEF264] font-medium">Verified ESG</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[8px]">
        <div className="bg-[#F7FEE7] p-2 rounded border border-[#D9F99D] space-y-1">
          <p className="text-slate-500 font-medium">The Journey of Waste</p>
          <p className="text-[9px] font-bold text-[#365314] leading-tight">Eliminating 42,000 tons of paper annually</p>
          <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden mt-1">
            <div className="bg-[#65A30D] h-full w-[78%]" />
          </div>
        </div>
        <div className="bg-slate-50 p-2 rounded border border-slate-200/80 space-y-1">
          <p className="text-slate-500 font-medium">Recycling Efficiency</p>
          <p className="text-[12px] font-bold text-slate-800">92.4%</p>
          <span className="text-[7px] text-[#16A34A] font-semibold">↑ +14.8% vs last qtr</span>
        </div>
      </div>

      {/* Map visual */}
      <div className="relative h-24 bg-[#E0F2FE]/40 rounded-md border border-[#BAE6FD] overflow-hidden flex flex-col justify-end p-2">
        {/* Abstract Map Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30 stroke-[#0284C7]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Simulated route */}
          <path d="M 20 80 Q 70 30 140 50 T 220 20" fill="none" stroke="#65A30D" strokeWidth="2" strokeDasharray="3 3" />
        </svg>

        {/* Map pins */}
        <div className="absolute top-4 left-6 flex items-center gap-1 bg-white/95 px-1.5 py-0.5 rounded shadow-xs border border-slate-200">
          <div className="w-1.5 h-1.5 rounded-full bg-[#65A30D]" />
          <span className="text-[8px] font-semibold text-slate-700">Central Depot</span>
        </div>
        <div className="absolute top-10 right-8 flex items-center gap-1 bg-white/95 px-1.5 py-0.5 rounded shadow-xs border border-slate-200">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
          <span className="text-[8px] font-semibold text-slate-700">Hub 4B</span>
        </div>

        <div className="relative z-10 bg-white/90 backdrop-blur-xs p-1.5 rounded border border-white text-[8px] flex items-center justify-between">
          <span className="text-slate-600 font-medium">Potential Environmental Savings</span>
          <span className="font-bold text-[#15803D]">1,420 CO₂e</span>
        </div>
      </div>
    </div>
  </div>
);

export const FinTechMockup: React.FC = () => (
  <div className="w-full h-full bg-[#FEF9C3]/50 rounded-xl p-3 flex flex-col justify-between overflow-hidden border border-[#FDE047]/50 select-none">
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-2.5 space-y-2">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-[#EAB308] text-slate-900 font-bold text-[9px] flex items-center justify-center">K</div>
          <span className="text-[10px] font-bold text-slate-800">Kestra Treasury</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
          <span className="text-[8px] text-slate-500 font-mono">Live Ledger</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-1.5 text-[8px]">
        <div className="bg-slate-50 p-1.5 rounded border border-slate-100">
          <p className="text-slate-400 font-medium">Available Cash</p>
          <p className="text-[11px] font-bold text-slate-900 mt-0.5">$3,420,890</p>
        </div>
        <div className="bg-slate-50 p-1.5 rounded border border-slate-100">
          <p className="text-slate-400 font-medium">30D Inflow</p>
          <p className="text-[11px] font-bold text-[#16A34A] mt-0.5">+$684,210</p>
        </div>
        <div className="bg-slate-50 p-1.5 rounded border border-slate-100">
          <p className="text-slate-400 font-medium">Unsettled</p>
          <p className="text-[11px] font-bold text-slate-700 mt-0.5">$48,150</p>
        </div>
      </div>

      {/* Table Mockup */}
      <div className="rounded border border-slate-200 overflow-hidden text-[8px]">
        <div className="bg-slate-100/80 px-2 py-1 font-semibold text-slate-600 flex justify-between">
          <span>Counterparty</span>
          <span>Category</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-slate-100 bg-white">
          <div className="px-2 py-1.5 flex justify-between items-center text-slate-700">
            <span className="font-medium text-slate-900 truncate max-w-[65px]">Stripe Settlement</span>
            <span className="text-slate-500">Revenue</span>
            <span className="font-semibold text-[#16A34A]">+$14,250.00</span>
            <span className="bg-[#DCFCE7] text-[#15803D] px-1 py-0.2 rounded text-[7px] font-medium">Cleared</span>
          </div>
          <div className="px-2 py-1.5 flex justify-between items-center text-slate-700">
            <span className="font-medium text-slate-900 truncate max-w-[65px]">AWS Infrastructure</span>
            <span className="text-slate-500">Hosting</span>
            <span className="font-semibold text-slate-800">-$4,120.80</span>
            <span className="bg-[#DCFCE7] text-[#15803D] px-1 py-0.2 rounded text-[7px] font-medium">Cleared</span>
          </div>
          <div className="px-2 py-1.5 flex justify-between items-center text-slate-700">
            <span className="font-medium text-slate-900 truncate max-w-[65px]">Silicon Foundry</span>
            <span className="text-slate-500">Hardware</span>
            <span className="font-semibold text-slate-800">-$38,400.00</span>
            <span className="bg-[#FEF3C7] text-[#B45309] px-1 py-0.2 rounded text-[7px] font-medium">Pending</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const HealthTechMockup: React.FC = () => (
  <div className="w-full h-full bg-[#FFEDD5]/60 rounded-xl p-3 flex flex-col justify-between overflow-hidden border border-[#FDBA74]/50 select-none">
    {/* Dual Mobile Screens presentation */}
    <div className="grid grid-cols-2 gap-2 h-full">
      {/* Mobile Screen 1 */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-2 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-1">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#EA580C] to-[#FB923C] text-[8px] font-bold text-white flex items-center justify-center">
              AJ
            </div>
            <span className="text-[7px] bg-[#FFEDD5] text-[#C2410C] px-1 py-0.2 rounded font-medium">Vitals Sync</span>
          </div>
          <div>
            <p className="text-[8px] text-slate-500">Hi Ajay!</p>
            <p className="text-[9px] font-bold text-slate-900">How can I help you today?</p>
          </div>
          <div className="bg-[#FFF7ED] p-1.5 rounded border border-[#FFEDD5] space-y-0.5">
            <p className="text-[7px] text-[#C2410C] font-semibold">Today’s Score</p>
            <p className="text-[12px] font-extrabold text-slate-900">92 <span className="text-[7px] font-normal text-slate-500">/ 100</span></p>
            <p className="text-[7px] text-[#16A34A] font-medium">Optimal Heart Rate</p>
          </div>
        </div>
        <div className="bg-[#F97316] text-white text-center py-1 rounded text-[8px] font-semibold mt-1">
          Log Symptoms
        </div>
      </div>

      {/* Mobile Screen 2 */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-2 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="text-[8px] font-bold text-slate-800 border-b border-slate-100 pb-1">
            Care Team
          </div>
          <div className="space-y-1">
            <div className="bg-slate-50 p-1 rounded border border-slate-100 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[8px] font-bold flex items-center justify-center shrink-0">
                DR
              </div>
              <div className="text-[7px] truncate">
                <p className="font-bold text-slate-800">Dr. Sarah Miller</p>
                <p className="text-slate-400">Cardiology · Available</p>
              </div>
            </div>
            <div className="bg-slate-50 p-1 rounded border border-slate-100 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-[8px] font-bold flex items-center justify-center shrink-0">
                NW
              </div>
              <div className="text-[7px] truncate">
                <p className="font-bold text-slate-800">Nurse Wayne</p>
                <p className="text-slate-400">Triage · In Call</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 text-slate-700 text-center py-1 rounded text-[8px] font-semibold border border-slate-200 mt-1">
          Book Video Visit
        </div>
      </div>
    </div>
  </div>
);

export const AiOpsMockup: React.FC = () => (
  <div className="w-full h-full bg-[#EDE9FE]/50 rounded-xl p-3 flex flex-col justify-between overflow-hidden border border-[#C4B5FD]/50 select-none">
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-2.5 space-y-2">
      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded bg-[#8B5CF6] flex items-center justify-center text-[7px] text-white font-bold">λ</div>
          <span className="text-[10px] font-bold text-slate-800">Cluster Telemetry</span>
        </div>
        <span className="text-[8px] bg-[#F5F3FF] text-[#6D28D9] px-1.5 py-0.5 rounded font-mono font-medium">99.98% Latency SLA</span>
      </div>

      {/* Observability Graphs */}
      <div className="grid grid-cols-2 gap-2 text-[8px]">
        <div className="bg-slate-50 p-2 rounded border border-slate-100">
          <div className="flex justify-between items-center mb-1">
            <span className="text-slate-500 font-medium">GPU Inference</span>
            <span className="font-mono text-slate-800 font-bold">14,280 tps</span>
          </div>
          {/* Simulated chart bars */}
          <div className="flex items-end gap-1 h-8 pt-1">
            <div className="w-full bg-[#C4B5FD] h-[45%] rounded-xs" />
            <div className="w-full bg-[#A78BFA] h-[65%] rounded-xs" />
            <div className="w-full bg-[#8B5CF6] h-[90%] rounded-xs" />
            <div className="w-full bg-[#7C3AED] h-[75%] rounded-xs" />
            <div className="w-full bg-[#6D28D9] h-[85%] rounded-xs" />
          </div>
        </div>

        <div className="bg-slate-50 p-2 rounded border border-slate-100">
          <div className="flex justify-between items-center mb-1">
            <span className="text-slate-500 font-medium">Memory Drift</span>
            <span className="text-[#16A34A] font-semibold">Normal (0.02)</span>
          </div>
          <div className="flex items-center justify-center h-8">
            <div className="w-8 h-8 rounded-full border-4 border-[#8B5CF6] border-t-transparent animate-spin-slow flex items-center justify-center text-[7px] font-bold text-slate-700">
              88%
            </div>
          </div>
        </div>
      </div>

      {/* Alert diagnostic stream */}
      <div className="bg-[#FAF5FF] p-1.5 rounded border border-[#E9D5FF] flex items-center justify-between text-[8px]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
          <span className="text-slate-700 font-mono">Node us-east-2c healthy</span>
        </div>
        <span className="text-slate-400 font-mono">12ms response</span>
      </div>
    </div>
  </div>
);

export const EnterpriseMockup: React.FC = () => (
  <div className="w-full h-full bg-[#DBEAFE]/50 rounded-xl p-3 flex flex-col justify-between overflow-hidden border border-[#93C5FD]/50 select-none">
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-2.5 space-y-2">
      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded bg-[#2563EB]" />
          <span className="text-[10px] font-bold text-slate-800">Global Enterprise Control</span>
        </div>
        <span className="text-[8px] bg-[#EFF6FF] text-[#1D4ED8] px-1.5 py-0.5 rounded font-medium">SOC2 Type II</span>
      </div>

      {/* Multi-tenant bar chart */}
      <div className="bg-slate-50 p-2 rounded border border-slate-100">
        <div className="flex justify-between items-center text-[8px] mb-1">
          <span className="text-slate-500 font-medium">Enterprise Pipeline Adoption</span>
          <span className="font-bold text-[#1D4ED8]">+320% YoY</span>
        </div>
        <div className="flex items-end gap-1.5 h-9 pt-1">
          <div className="flex-1 bg-slate-200 h-[30%] rounded-xs" />
          <div className="flex-1 bg-slate-300 h-[45%] rounded-xs" />
          <div className="flex-1 bg-[#93C5FD] h-[60%] rounded-xs" />
          <div className="flex-1 bg-[#60A5FA] h-[80%] rounded-xs" />
          <div className="flex-1 bg-[#2563EB] h-[100%] rounded-xs" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 text-[8px]">
        <div className="bg-white p-1.5 rounded border border-slate-200">
          <p className="text-slate-400">Multi-Tenant Orgs</p>
          <p className="text-[11px] font-bold text-slate-900 mt-0.5">142 Entities</p>
        </div>
        <div className="bg-white p-1.5 rounded border border-slate-200">
          <p className="text-slate-400">Data Sanitized</p>
          <p className="text-[11px] font-bold text-[#16A34A] mt-0.5">100% Verified</p>
        </div>
      </div>
    </div>
  </div>
);

export const MockupRenderer: React.FC<{ projectId: string }> = ({ projectId }) => {
  switch (projectId) {
    case 'cleantech':
      return <CleanTechMockup />;
    case 'fintech':
      return <FinTechMockup />;
    case 'healthtech':
      return <HealthTechMockup />;
    case 'aiops':
      return <AiOpsMockup />;
    case 'enterprisesaas':
      return <EnterpriseMockup />;
    default:
      return <CleanTechMockup />;
  }
};
