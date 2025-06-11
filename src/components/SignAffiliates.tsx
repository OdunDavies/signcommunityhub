import React from 'react';
import ProfileCard from './ProfileCard';

const SignAffiliates = () => {
  const affiliates = [
    {
      username: 'realyanxin',
      displayName: 'Xin (Shin) Yan 閻欣🧡👀',
      bio: 'CEO & Chief reply guy @Sign | 建立新秩序 @ethsign $SIGN means 1 dollar 1 SIGN',
      avatar: 'https://unavatar.io/twitter/realyanxin',
      url: 'https://x.com/realyanxin',
      followers: '12.5K'
    },
    {
      username: '_biggids',
      displayName: 'Big Gids👨‍🍳',
      bio: 'Community Ecosystem Lead @sign | Founder @SignAcademyHQ | Founder/Host of #OnchainOrigins podcast.',
      avatar: 'https://unavatar.io/twitter/_biggids',
      url: 'https://x.com/_biggids',
      followers: '8.3K'
    },
    {
      username: 'lucky_of_web3',
      displayName: 'Lucky Esemuede🧑‍🌾',
      bio: 'Early contributor → @ethsign || Sign Support Warrior || Co-founder → @AfricaSIGNGiant',
      avatar: 'https://unavatar.io/twitter/lucky_of_web3',
      url: 'https://x.com/lucky_of_web3',
      followers: '6.7K'
    },
    {
      username: 'tokentable',
      displayName: 'TokenTable',
      bio: 'TokenTable is the #1 token distribution platform built by @ethsign',
      avatar: 'https://unavatar.io/twitter/tokentable',
      url: 'https://x.com/tokentable',
      followers: '15.2K'
    },
    {
      username: 'angelofweb3_',
      displayName: 'ANGEL 𖤍',
      bio: 'Chief Creative Director @ethsign @sign || Linguist || High on Orange Pills 💊',
      avatar: 'https://unavatar.io/twitter/angelofweb3_',
      url: 'https://x.com/angelofweb3_',
      followers: '9.1K'
    },
    {
      username: 'roguescholarbro',
      displayName: 'Megan W 🧡👀',
      bio: 'Harvard `23 🧡 UCBerkeley `19 🧡 building the Orange Dynasty as @sign intern :3',
      avatar: 'https://unavatar.io/twitter/roguescholarbro',
      url: 'https://x.com/roguescholarbro',
      followers: '11.8K'
    },
    {
      username: 'tajudeen_10',
      displayName: 'Tajudeen 🔶',
      bio: 'KING of @sign | Building the @ethsign Dynasty 🧡👀',
      avatar: 'https://unavatar.io/twitter/tajudeen_10',
      url: 'https://x.com/tajudeen_10',
      followers: '5.4K'
    },
    {
      username:'0xzoe_im',
      displayName: 'Zoe Chen 🧡👀',
      bio: 'CM(CUTEST MOD) @sign.',
      avatar: 'https://unavatar.io/twitter/0xzoe_im',
      url: 'https://x.com/0xzoe_im',
      followers: '7.9K'
    },
    {
      username: '@himesama_0',
      displayName: 'Hime Sama 🧡👀',
      bio: 'Orange Dynasty Coordinator 🔶 | Just a chill girl that sees @sign ✍🏾🧡',
      avatar: 'https://unavatar.io/twitter/himesama_01',
      url: 'https://x.com/himesama_01',
      followers: '13.6K'
    },
    {
      username: 'trojan_bus1',
      displayName: 'Thoth.sign🧡 👀',
      bio: 'Crypto Enthusiast || Chief of Culture 🌍 @sign @ethsign 🧡 Sign Sensei',
      avatar: 'https://unavatar.io/twitter/trojan_bus1',
      url: 'https://x.com/trojan_bus1',
      followers: '4.2K'
    },
    {
      username: 'truthonchained',
      displayName: 'TRUTH',
      bio: 'Sign Maxi | Building the best version of myself with Orange dynasty | Co- founder @SignAcademyHQ',
      avatar: 'https://unavatar.io/twitter/truthonchained',
      url: 'https://x.com/truthonchained',
      followers: '16.3K'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold crypto-gradient bg-clip-text text-transparent">
        Sign Affiliates
      </h2>
      <div className="space-y-4">
        {affiliates.map((affiliate, index) => (
          <div key={affiliate.username} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProfileCard {...affiliate} isAffiliate={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignAffiliates;
