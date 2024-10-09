import React from 'react';

const SpeakingEngagements: React.FC = () => {
  const embeddings = [
    { id: "19e1c5dc4b694b5aa16dadf25daeb5e3", title: "BOOSTER Sourcing / SOSUEU 2018" },
    { id: "2f4e7a9d0b8c4a1e3d6f5h7j9k0l2m4n", title: "Talent Acquisition Strategies 2023" },
    { id: "3g5i7k9m1o3q5s7u9w1y3a5c7e9g1h3j", title: "AI in Recruitment: The Future is Now" },
    { id: "4h6j8l0n2p4r6t8v0x2z4b6d8f0h2j4l", title: "Building Diverse Teams Through Innovative Sourcing" },
    { id: "5i7k9m1o3q5s7u9w1y3a5c7e9g1h3j5l", title: "The Art of Social Recruiting" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Speaking Engagements</h1>
      <div className="grid grid-cols-1 gap-8">
        {embeddings.map((embed, index) => (
          <div key={index} className="w-full">
            <h2 className="text-xl font-semibold mb-2">{embed.title}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={`https://speakerdeck.com/player/${embed.id}`}
                title={embed.title}
                allowFullScreen
                style={{
                  border: 0,
                  background: 'padding-box padding-box rgba(0, 0, 0, 0.1)',
                  margin: 0,
                  padding: 0,
                  borderRadius: '6px',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 40px',
                }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakingEngagements;