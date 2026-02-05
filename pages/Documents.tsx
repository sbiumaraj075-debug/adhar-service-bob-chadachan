
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Documents: React.FC = () => {
  const navigate = useNavigate();

  const required = [
    { name: 'Passport', type: 'Identity Proof' },
    { name: "Driver's License", type: 'Address Proof' },
    { name: 'Birth Certificate', type: 'Date of Birth Proof' },
  ];

  return (
    <div className="min-h-screen bg-[#111a22] text-white pb-32">
      <header className="px-4 pt-12 pb-4 flex items-center gap-4 border-b border-white/10 sticky top-0 bg-[#111a22] z-40">
        <button onClick={() => navigate(-1)} className="p-2">
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold flex-1 text-center pr-10">Document Verification</h2>
      </header>

      <main className="p-4 space-y-8">
        <section className="space-y-4">
          <h3 className="text-lg font-bold">Required Documents</h3>
          <div className="space-y-3">
            {required.map((doc, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#1a2530] p-4 rounded-2xl border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#233648] flex items-center justify-center shrink-0">
                  <span className="material-icons-round text-white">description</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">{doc.name}</p>
                  <p className="text-xs text-slate-400 font-medium">{doc.type}</p>
                </div>
                <button className="bg-[#233648] px-4 py-2 rounded-xl text-xs font-bold text-white active:scale-95 transition-all">
                  Upload
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold">Uploaded Documents</h3>
          <div className="grid grid-cols-1 gap-4">
             <div className="aspect-[3/2] rounded-3xl overflow-hidden shadow-lg border border-white/5">
                <img src="https://picsum.photos/600/400?random=1" className="w-full h-full object-cover" alt="" />
             </div>
             <div className="aspect-[3/2] rounded-3xl overflow-hidden shadow-lg border border-white/5">
                <img src="https://picsum.photos/600/400?random=2" className="w-full h-full object-cover" alt="" />
             </div>
          </div>
        </section>

        <button 
          onClick={() => navigate('/status')}
          className="w-full bg-[#1380ec] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 transition-all active:scale-95"
        >
          Submit for Verification
        </button>
      </main>
    </div>
  );
};

export default Documents;
