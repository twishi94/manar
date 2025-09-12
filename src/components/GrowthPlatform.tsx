import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Sun, Building2, Handshake, Cpu } from 'lucide-react';
import solarEnergyImage from 'figma:asset/30f76779a990b49a2f5bad9af0af3d96c4bc7802.png';
import smartAutomationImage from 'figma:asset/1515946da1c8481ed143f8aa5a5d66205d9e9924.png';
import bmsImage from 'figma:asset/b1e63b11df20ef154745a0cf2699def4efbe4969.png';
import { Button } from './ui/button';

export function GrowthPlatform() {
  const [activeTab, setActiveTab] = useState('building-management');

  const tabs = [
    {
      id: 'solar-energy',
      name: 'Solar Energy',
      icon: <Sun className="w-4 h-4" />,
      subtitle: '',
      title: 'Smart Solar Automation',
      description: 'Deploy IoT systems, automate energy processes, and gain real-time insights across your solar operations.',
      buttonText: 'Explore Solar Solutions',
      visual: (
        <div className="relative w-full h-48 mb-6">
          {/* Full image covering the visual area */}
          <img
            src={solarEnergyImage}
            alt="Solar energy solutions with smart automation"
            className="w-full h-full object-cover"
          />
        </div>
      )
    },
    {
      id: 'smart-automation',
      name: 'Automation',
      icon: <Cpu className="w-4 h-4" />,
      title: 'Smart Automation',
      subtitle: '',
      description: 'Smart Automation • Home Automation • Smart Hotels & Hospitality • Commercial Automation • Industrial IoT Solutions',
      buttonText: 'Explore Smart Automation',
      visual: (
        <div className="relative w-full h-48 mb-6">
          <img
            src={smartAutomationImage}
            alt="Smart automation solutions with intelligent control systems"
            className="w-full h-full object-cover"
          />
        </div>
      )
    },
    {
      id: 'building-management',
      name: 'BMS',
      icon: <Building2 className="w-4 h-4" />,
      title: 'BMS',
      subtitle: 'Building Management Systems',
      description: 'Transform your building operations with comprehensive BMS solutions that integrate HVAC, lighting, security, and energy management for optimal efficiency and comfort.',
      buttonText: 'Explore BMS',
      visual: (
        <div className="relative w-full h-48 mb-6">
          <img
            src={bmsImage}
            alt="Building management system with smart automation and IoT controls"
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  const isSmartAutomationActive = activeTab === 'smart-automation';
  const isBuildingManagementActive = activeTab === 'building-management';
  
  return (
    <section className="relative overflow-hidden">
      {/* Dynamic gradient background based on active tab */}
      {isSmartAutomationActive ? (
        // Dark brown/chocolate theme for Smart Automation
        <>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #2D1B14 0%, #3E2723 35%, #1C1C1C 100%)'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </>
      ) : isBuildingManagementActive ? (
        // Purple gradient theme for Building Management Systems
        <>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #1B0D2B 0%, #3B2463 35%, #2D1B4E 100%)'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent"></div>
        </>
      ) : (
        // Default green theme for other tabs
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-900"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 to-transparent"></div>
        </>
      )}
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>
      


      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-40">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            {/* Two-column layout - centered horizontally */}
            <div className="flex justify-center">
              <div className="grid lg:grid-cols-2 gap-16 max-w-6xl w-full items-start">
                
                {/* Left Column - Header content and tabs (left-aligned) */}
                <div className="flex flex-col">
                  {/* Header content area with fixed spacing */}
                  <div className="mb-12">
                    {/* Solutions badge - aligned with left content */}
                    <div className={`inline-block px-4 py-2 text-sm font-medium mb-8 ${
                      isSmartAutomationActive 
                        ? 'text-orange-200' 
                        : isBuildingManagementActive 
                        ? 'text-purple-200'
                        : 'bg-green-800/50 text-green-200'
                    }`} style={isSmartAutomationActive ? {
                      backgroundColor: 'rgba(120, 63, 4, 0.4)'
                    } : isBuildingManagementActive ? {
                      backgroundColor: 'rgba(88, 28, 135, 0.4)'
                    } : {}}>
                      Solutions
                    </div>
                    
                    {/* Header content with fixed height container */}
                    <div className="min-h-[280px]">
                      <h2 className="text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
                        {activeTab === 'solar-energy' ? (
                          <>
                            Harness the power
                            <br />
                            of solar <span className="text-green-400">automation.</span>
                          </>
                        ) : activeTab === 'smart-automation' ? (
                          <>
                            Automation for
                            <br />
                            smart <span className="text-orange-400">spaces.</span>
                          </>
                        ) : activeTab === 'building-management' ? (
                          <>
                            Intelligent control for
                            <br />
                            modern <span className="text-purple-400">buildings.</span>
                          </>
                        ) : (
                          <>
                            Built for your
                            <br />
                            next stage of
                            <br />
                            <span className="text-green-400">growth.</span>
                          </>
                        )}
                      </h2>
                      
                      <p className={`text-xl leading-relaxed max-w-md ${
                        isSmartAutomationActive ? 'text-orange-100' : isBuildingManagementActive ? 'text-purple-100' : 'text-green-100'
                      }`}>
                        {activeTab === 'solar-energy' 
                          ? 'Advanced solar energy automation systems that maximize efficiency and ROI with intelligent monitoring and control.'
                          : activeTab === 'smart-automation'
                          ? 'Deploy intelligent automation across every sector—from smart homes to industrial facilities.'
                          : activeTab === 'building-management'
                          ? 'Comprehensive BMS solutions that integrate all building systems for optimal performance, energy efficiency, and occupant comfort.'
                          : 'Enterprise-grade automation solutions that scale with your business.'
                        }
                      </p>
                    </div>
                  </div>

                  {/* Tabs navigation - left aligned */}
                  <div className={`flex backdrop-blur-sm overflow-hidden w-full ${
                    isSmartAutomationActive 
                      ? 'border' 
                      : isBuildingManagementActive
                      ? 'border'
                      : 'bg-green-800/20 border border-green-700/30'
                  }`} style={isSmartAutomationActive ? {
                    backgroundColor: 'rgba(45, 27, 20, 0.6)',
                    borderColor: 'rgba(120, 63, 4, 0.4)'
                  } : isBuildingManagementActive ? {
                    backgroundColor: 'rgba(27, 13, 43, 0.6)',
                    borderColor: 'rgba(88, 28, 135, 0.4)'
                  } : {}}>
                    {tabs.map((tab, index) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex-1 h-16 px-4 py-4 text-sm font-medium last:border-r-0 transition-all duration-300 ${
                          isSmartAutomationActive 
                            ? `border-r ${
                                activeTab === tab.id
                                  ? 'text-orange-400'
                                  : 'text-orange-200 hover:text-orange-300'
                              }`
                            : isBuildingManagementActive
                            ? `border-r ${
                                activeTab === tab.id
                                  ? 'text-purple-400'
                                  : 'text-purple-200 hover:text-purple-300'
                              }`
                            : `border-r border-green-700/30 ${
                                activeTab === tab.id
                                  ? 'text-green-400 bg-green-700/40'
                                  : 'text-green-200 hover:text-green-300 hover:bg-green-800/30'
                              }`
                        }`}
                        style={isSmartAutomationActive ? {
                          borderRightColor: 'rgba(120, 63, 4, 0.4)',
                          backgroundColor: activeTab === tab.id ? 'rgba(120, 63, 4, 0.3)' : 'transparent'
                        } : isBuildingManagementActive ? {
                          borderRightColor: 'rgba(88, 28, 135, 0.4)',
                          backgroundColor: activeTab === tab.id ? 'rgba(88, 28, 135, 0.3)' : 'transparent'
                        } : {}}
                        onMouseEnter={(e) => {
                          if (isSmartAutomationActive && activeTab !== tab.id) {
                            e.currentTarget.style.backgroundColor = 'rgba(120, 63, 4, 0.2)';
                          } else if (isBuildingManagementActive && activeTab !== tab.id) {
                            e.currentTarget.style.backgroundColor = 'rgba(88, 28, 135, 0.2)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if ((isSmartAutomationActive || isBuildingManagementActive) && activeTab !== tab.id) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        <div className="flex items-center justify-center gap-2 h-full">
                          {tab.icon}
                          <span className="whitespace-nowrap text-xs sm:text-sm">{tab.name}</span>
                        </div>
                        
                        {/* Active indicator */}
                        {activeTab === tab.id && (
                          <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                            isSmartAutomationActive ? 'bg-orange-400' : isBuildingManagementActive ? 'bg-purple-400' : 'bg-green-400'
                          }`}></div>
                        )}
                        
                        {/* Hover effect - handled by inline styles above */}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column - Content box (center-right aligned) */}
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-md lg:max-w-lg">
                    {activeTab === 'solar-energy' ? (
                      // Solar energy - full image with normal CTA flow
                      <div className="bg-green-800/30 backdrop-blur-sm border border-green-700/50 p-8 min-h-[400px] transition-all duration-500">
                        <div className="space-y-6">
                          {/* Visual element - full image */}
                          {activeTabData.visual}

                          {/* Title and Description */}
                          <div className="space-y-3">
                            <h3 className="text-xl text-white font-medium">
                              {activeTabData.title}
                            </h3>
                            <p className="text-green-100 leading-relaxed">
                              {activeTabData.description}
                            </p>
                          </div>

                          {/* CTA Button in normal flow */}
                          <Button className="bg-green-500 hover:bg-green-400 text-green-900 px-6 py-3 font-medium flex items-center gap-2 transition-all duration-200">
                            {activeTabData.buttonText}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ) : activeTab === 'smart-automation' ? (
                      // Smart Automation - dark brown theme with full image layout
                      <div className="backdrop-blur-sm border p-8 min-h-[400px] transition-all duration-500" style={{
                        backgroundColor: 'rgba(45, 27, 20, 0.7)',
                        borderColor: 'rgba(120, 63, 4, 0.5)'
                      }}>
                        <div className="space-y-6">
                          {/* Visual element - full image */}
                          {activeTabData.visual}

                          {/* Title and Description */}
                          <div className="space-y-3">
                            <h3 className="text-2xl font-semibold text-white mb-2">
                              {activeTabData.title}
                            </h3>
                            <p className="text-orange-200 text-lg mb-4">
                              {activeTabData.subtitle}
                            </p>
                            <p className="text-orange-100 leading-relaxed">
                              {activeTabData.description}
                            </p>
                          </div>

                          {/* CTA Button with orange theme */}
                          <Button className="px-6 py-3 font-medium flex items-center gap-2 transition-all duration-200" style={{
                            backgroundColor: '#FF5722',
                            color: '#FFFFFF'
                          }} onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#E64A19';
                          }} onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#FF5722';
                          }}>
                            {activeTabData.buttonText}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ) : activeTab === 'building-management' ? (
                      // Building Management Systems - purple theme with image first
                      <div className="backdrop-blur-sm border p-8 min-h-[400px] transition-all duration-500" style={{
                        backgroundColor: 'rgba(27, 13, 43, 0.7)',
                        borderColor: 'rgba(88, 28, 135, 0.5)'
                      }}>
                        <div className="space-y-6">
                          {/* Visual element first */}
                          {activeTabData.visual}

                          {/* Title and subtitle below image */}
                          <div>
                            <h3 className="text-2xl font-semibold text-white mb-2">
                              {activeTabData.title}
                            </h3>
                            <p className="text-purple-200 text-lg">
                              {activeTabData.subtitle}
                            </p>
                          </div>

                          <p className="text-purple-100 leading-relaxed">
                            {activeTabData.description}
                          </p>

                          <Button className="px-6 py-3 font-medium flex items-center gap-2 transition-all duration-200" style={{
                            backgroundColor: '#8B5CF6',
                            color: '#FFFFFF'
                          }} onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#7C3AED';
                          }} onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#8B5CF6';
                          }}>
                            {activeTabData.buttonText}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      // Other tabs - normal green content layout
                      <div className="bg-green-800/30 backdrop-blur-sm border border-green-700/50 p-8 min-h-[400px] transition-all duration-500">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-semibold text-white mb-2">
                              {activeTabData.title}
                            </h3>
                            <p className="text-green-200 text-lg">
                              {activeTabData.subtitle}
                            </p>
                          </div>

                          {/* Visual element */}
                          {activeTabData.visual}

                          <p className="text-green-100 leading-relaxed">
                            {activeTabData.description}
                          </p>

                          <Button className="bg-green-500 hover:bg-green-400 text-green-900 px-6 py-3 font-medium flex items-center gap-2 transition-all duration-200">
                            {activeTabData.buttonText}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}