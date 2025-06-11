import React from 'react';
import { ExternalLink, Twitter } from 'lucide-react';
import ClickableImage from './ClickableImage';

interface ProfileCardProps {
  username: string;
  displayName: string;
  bio: string;
  avatar: string;
  url: string;
  followers?: string;
  isAffiliate?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  displayName,
  bio,
  avatar,
  url,
  followers,
  isAffiliate = false
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFollow = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`https://x.com/intent/follow?screen_name=${username}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`profile-card ${isAffiliate ? 'border-sign-orange/50' : ''} p-4`}>
      <div className="flex items-start gap-4">
        {/* Profile Picture */}
        <div className="relative group cursor-pointer" onClick={handleClick}>
          <ClickableImage
            src={avatar}
            alt={`${displayName} avatar`}
            className="w-16 h-16 rounded-full object-cover border-2 border-sign-orange/30 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1 cursor-pointer" onClick={handleClick}>
                <h3 className="font-bold text-foreground truncate hover:text-sign-orange transition-colors">{displayName}</h3>
                <ExternalLink size={14} className="text-sign-orange flex-shrink-0" />
              </div>
              <p className="text-sm text-sign-orange mb-2">@{username}</p>
              {followers && (
                <p className="text-xs text-muted-foreground mb-2">{followers} followers</p>
              )}
            </div>

            {/* Follow Button */}
            <button
              onClick={handleFollow}
              className="flex items-center gap-2 px-4 py-2 bg-sign-orange rounded-full text-white font-semibold text-sm hover:bg-sign-orange-light transition-colors duration-300"
            >
              <Twitter size={16} />
              Follow
            </button>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted-foreground line-clamp-3 mt-2">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
