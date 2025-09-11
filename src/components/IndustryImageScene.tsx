import homeAutomationImage from 'figma:asset/9d6767058ffe1e38b1080261fa13be0d4002ec17.png';
import officeAutomationImage from 'figma:asset/5c8e3a4200cb0b2801eb5325de099a447f930d27.png';
import hospitalAutomationImage from 'figma:asset/d626fd9ea863273704bf862f15592ae78731a153.png';
import buildingAutomationImage from 'figma:asset/ccec93d7559d25c694b45cf1494a8fe6ad6f3f4c.png';
import smartSolarAutomationImage from 'figma:asset/c0b1276964d93ecbac0e959fa09e0d68936619e7.png';
import agricultureImage from 'figma:asset/c87ef47c94b157d54e25a0bda835b1e33c1a531a.png';
import securityImage from 'figma:asset/4be07ab3ca1c1396be473a413a1ae2da6adfaf20.png';

interface IndustryImageSceneProps {
  industry: string;
  className?: string;
}

export function IndustryImageScene({ industry, className = "" }: IndustryImageSceneProps) {
  const getIndustryImage = () => {
    switch (industry) {
      case 'home-automation':
        return homeAutomationImage;
      case 'office-automation':
        return officeAutomationImage;
      case 'hospital-automation':
        return hospitalAutomationImage;
      case 'industrial-automation':
        return 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGZhY3RvcnklMjBtYWNoaW5lcnklMjBJb1R8ZW58MXx8fHwxNzU1NTk1NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
      case 'buildings':
        return buildingAutomationImage;
      case 'energy':
        return smartSolarAutomationImage;
      case 'agriculture':
        return agricultureImage;
      case 'security':
        return securityImage;
      default:
        return homeAutomationImage;
    }
  };

  const getIndustryName = () => {
    switch (industry) {
      case 'home-automation':
        return 'Home Automation';
      case 'office-automation':
        return 'Office Automation';
      case 'hospital-automation':
        return 'Hospital Automation';
      case 'industrial-automation':
        return 'Industrial Automation';
      case 'buildings':
        return 'Building Automation';
      case 'energy':
        return 'Smart Solar Automation';
      case 'agriculture':
        return 'Agricultural Automation';
      case 'security':
        return 'Smart Home Security';
      default:
        return 'Home Automation';
    }
  };

  const getDeviceCount = () => {
    switch (industry) {
      case 'home-automation':
        return '15 Devices';
      case 'office-automation':
        return '12 Devices';
      case 'hospital-automation':
        return '25 Medical Devices';
      case 'industrial-automation':
        return '50 Industrial Sensors';
      case 'buildings':
        return '8 Devices';
      case 'energy':
        return '12 Solar Panels';
      case 'agriculture':
        return '12 IoT Sensors';
      case 'security':
        return '18 Smart Devices';
      default:
        return '15 Devices';
    }
  };

  const getTemperature = () => {
    switch (industry) {
      case 'home-automation':
        return '22°C';
      case 'office-automation':
        return '23°C';
      case 'hospital-automation':
        return '21°C';
      case 'industrial-automation':
        return '45°C';
      case 'buildings':
        return '24°C';
      case 'energy':
        return '35°C';
      case 'agriculture':
        return '28°C';
      case 'security':
        return '23°C';
      default:
        return '22°C';
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Full-width cover image container - increased height */}
      <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        {/* Main image - full cover */}
        <img
          src={getIndustryImage()}
          alt={`${getIndustryName()} automation and IoT solutions`}
          className="w-full h-full object-cover"
        />
        
        {/* Minimal IoT sensor indicators - stacked at bottom */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Stat boxes stacked at bottom with blur background */}
          <div className="absolute bottom-6 left-6 flex flex-col">
            {/* Live status */}
            <div className="bg-black/20 backdrop-blur-sm text-white px-3 py-2 text-sm font-medium">
              <span>Live Monitoring</span>
            </div>
            
            {/* White divider */}
            <div className="h-px bg-white/30 mx-3"></div>
            
            {/* Temperature */}
            <div className="bg-black/20 backdrop-blur-sm text-white px-3 py-2 text-sm font-medium">
              {getTemperature()}
            </div>
            
            {/* White divider */}
            <div className="h-px bg-white/30 mx-3"></div>
            
            {/* Device count */}
            <div className="bg-black/20 backdrop-blur-sm text-white px-3 py-2 text-sm font-medium">
              <span>{getDeviceCount()}</span>
            </div>
            
            {/* White divider */}
            <div className="h-px bg-white/30 mx-3"></div>
            
            {/* Uptime */}
            <div className="bg-black/20 backdrop-blur-sm text-white px-3 py-2 text-sm font-medium">
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}