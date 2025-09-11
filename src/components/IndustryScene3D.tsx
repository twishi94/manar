import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface IndustryScene3DProps {
  industry: string;
  className?: string;
}

export function IndustryScene3D({ industry, className = "" }: IndustryScene3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number>();
  const [isLoading, setIsLoading] = useState(true);

  const createSmartBuildingScene = (scene: THREE.Scene) => {
    // Room floor
    const floorGeometry = new THREE.PlaneGeometry(8, 6);
    const floorMaterial = new THREE.MeshLambertMaterial({ color: 0xf5f5f5 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.5;
    scene.add(floor);

    // Room walls
    const wallMaterial = new THREE.MeshLambertMaterial({ color: 0xe8e8e8 });
    
    // Back wall
    const backWallGeometry = new THREE.PlaneGeometry(8, 4);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(0, 1.5, -3);
    scene.add(backWall);

    // Side walls
    const sideWallGeometry = new THREE.PlaneGeometry(6, 4);
    const leftWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-4, 1.5, 0);
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(4, 1.5, 0);
    scene.add(rightWall);

    // Kitchen area
    const kitchenCounterGeometry = new THREE.BoxGeometry(3, 0.8, 1.2);
    const kitchenCounterMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const kitchenCounter = new THREE.Mesh(kitchenCounterGeometry, kitchenCounterMaterial);
    kitchenCounter.position.set(-2, 0, -2);
    scene.add(kitchenCounter);

    // Kitchen appliances
    const fridgeGeometry = new THREE.BoxGeometry(0.8, 2, 0.8);
    const fridgeMaterial = new THREE.MeshLambertMaterial({ color: 0x2d3748 });
    const fridge = new THREE.Mesh(fridgeGeometry, fridgeMaterial);
    fridge.position.set(-3.2, 0.5, -2);
    scene.add(fridge);

    // Living room sofa
    const sofaGeometry = new THREE.BoxGeometry(2.5, 0.8, 1);
    const sofaMaterial = new THREE.MeshLambertMaterial({ color: 0x4a90e2 });
    const sofa = new THREE.Mesh(sofaGeometry, sofaMaterial);
    sofa.position.set(1, 0, 1);
    scene.add(sofa);

    // Coffee table
    const tableGeometry = new THREE.BoxGeometry(1.2, 0.3, 0.8);
    const tableMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(1, -0.1, 0);
    scene.add(table);

    // Laptop on table
    const laptopGeometry = new THREE.BoxGeometry(0.6, 0.05, 0.4);
    const laptopMaterial = new THREE.MeshLambertMaterial({ color: 0x2d3748 });
    const laptop = new THREE.Mesh(laptopGeometry, laptopMaterial);
    laptop.position.set(1, 0.07, 0);
    scene.add(laptop);

    // IoT devices and sensors
    const devices = [];
    
    // Smart thermostat
    const thermostatGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.1);
    const thermostatMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const thermostat = new THREE.Mesh(thermostatGeometry, thermostatMaterial);
    thermostat.position.set(2, 1.5, -2.9);
    devices.push(thermostat);
    scene.add(thermostat);

    // Smart lights
    for (let i = 0; i < 3; i++) {
      const lightGeometry = new THREE.SphereGeometry(0.15);
      const lightMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xFFFF88,
        emissive: 0xFFFF44,
        emissiveIntensity: 0.3
      });
      const smartLight = new THREE.Mesh(lightGeometry, lightMaterial);
      smartLight.position.set(i * 2 - 2, 3, i * -1);
      devices.push(smartLight);
      scene.add(smartLight);
    }

    // Security camera
    const cameraGeometry = new THREE.BoxGeometry(0.2, 0.15, 0.25);
    const cameraMaterial = new THREE.MeshLambertMaterial({ color: 0x2d3748 });
    const camera = new THREE.Mesh(cameraGeometry, cameraMaterial);
    camera.position.set(3.5, 2.5, -2.5);
    devices.push(camera);
    scene.add(camera);

    // Smart speakers
    const speakerGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.4);
    const speakerMaterial = new THREE.MeshLambertMaterial({ color: 0x2d3748 });
    const speaker = new THREE.Mesh(speakerGeometry, speakerMaterial);
    speaker.position.set(-1, 0.6, -2);
    devices.push(speaker);
    scene.add(speaker);

    // Plant with sensor
    const plantPotGeometry = new THREE.CylinderGeometry(0.25, 0.2, 0.3);
    const plantPotMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const plantPot = new THREE.Mesh(plantPotGeometry, plantPotMaterial);
    plantPot.position.set(2.5, -0.35, 1.5);
    scene.add(plantPot);

    const plantGeometry = new THREE.SphereGeometry(0.3);
    const plantMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
    const plant = new THREE.Mesh(plantGeometry, plantMaterial);
    plant.position.set(2.5, 0.1, 1.5);
    scene.add(plant);

    return { devices, floor, sofa, table };
  };

  const createManufacturingScene = (scene: THREE.Scene) => {
    // Factory floor
    const floorGeometry = new THREE.PlaneGeometry(10, 8);
    const floorMaterial = new THREE.MeshLambertMaterial({ color: 0x404040 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.5;
    scene.add(floor);

    // Assembly line conveyor
    const conveyorGeometry = new THREE.BoxGeometry(6, 0.2, 1);
    const conveyorMaterial = new THREE.MeshLambertMaterial({ color: 0x4a5568 });
    const conveyor = new THREE.Mesh(conveyorGeometry, conveyorMaterial);
    conveyor.position.set(0, -0.3, 0);
    scene.add(conveyor);

    // Manufacturing equipment
    const machineGeometry = new THREE.BoxGeometry(1.5, 2, 1.5);
    const machineMaterial = new THREE.MeshLambertMaterial({ color: 0xFF5722 });
    
    for (let i = 0; i < 3; i++) {
      const machine = new THREE.Mesh(machineGeometry, machineMaterial);
      machine.position.set(i * 2.5 - 2.5, 0.5, -2);
      scene.add(machine);
    }

    // Robotic arms
    const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2);
    const armMaterial = new THREE.MeshLambertMaterial({ color: 0x2d3748 });
    
    const roboticArms = [];
    for (let i = 0; i < 2; i++) {
      const arm = new THREE.Mesh(armGeometry, armMaterial);
      arm.position.set(i * 3 - 1.5, 1, 2);
      arm.rotation.x = Math.PI / 6;
      roboticArms.push(arm);
      scene.add(arm);
    }

    // Control panels
    const panelGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.2);
    const panelMaterial = new THREE.MeshLambertMaterial({ color: 0x2d3748 });
    
    for (let i = 0; i < 3; i++) {
      const panel = new THREE.Mesh(panelGeometry, panelMaterial);
      panel.position.set(i * 2 - 2, 0.6, 3.5);
      scene.add(panel);
      
      // Screen on panel
      const screenGeometry = new THREE.PlaneGeometry(0.6, 0.4);
      const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF88 });
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.set(i * 2 - 2, 0.8, 3.61);
      scene.add(screen);
    }

    return { roboticArms, conveyor };
  };

  const createEnergyScene = (scene: THREE.Scene) => {
    // Ground
    const groundGeometry = new THREE.PlaneGeometry(12, 10);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    scene.add(ground);

    // Wind turbines
    const turbines = [];
    for (let i = 0; i < 3; i++) {
      // Turbine pole
      const poleGeometry = new THREE.CylinderGeometry(0.1, 0.15, 4);
      const poleMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
      const pole = new THREE.Mesh(poleGeometry, poleMaterial);
      pole.position.set(i * 3 - 3, 1, -2);
      scene.add(pole);

      // Turbine nacelle
      const nacelleGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.4);
      const nacelleMaterial = new THREE.MeshLambertMaterial({ color: 0xe0e0e0 });
      const nacelle = new THREE.Mesh(nacelleGeometry, nacelleMaterial);
      nacelle.position.set(i * 3 - 3, 3, -2);
      scene.add(nacelle);

      // Turbine blades
      const bladeGroup = new THREE.Group();
      for (let j = 0; j < 3; j++) {
        const bladeGeometry = new THREE.BoxGeometry(2, 0.1, 0.05);
        const bladeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
        const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
        blade.position.set(1, 0, 0);
        blade.rotation.z = (j * Math.PI * 2) / 3;
        bladeGroup.add(blade);
      }
      bladeGroup.position.set(i * 3 - 3, 3, -1.8);
      turbines.push(bladeGroup);
      scene.add(bladeGroup);
    }

    // Solar panel array
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        const panelGeometry = new THREE.BoxGeometry(1.5, 0.05, 1);
        const panelMaterial = new THREE.MeshLambertMaterial({ color: 0x1a365d });
        const panel = new THREE.Mesh(panelGeometry, panelMaterial);
        panel.position.set(col * 1.7 - 2.5, 0.2, row * 1.2 + 1);
        panel.rotation.x = -Math.PI / 8;
        scene.add(panel);
      }
    }

    // Control station
    const stationGeometry = new THREE.BoxGeometry(2, 1.5, 1.5);
    const stationMaterial = new THREE.MeshLambertMaterial({ color: 0x4a5568 });
    const station = new THREE.Mesh(stationGeometry, stationMaterial);
    station.position.set(4, 0.25, 0);
    scene.add(station);

    return { turbines };
  };

  const createIndustryScene = (industry: string, scene: THREE.Scene) => {
    switch (industry) {
      case 'buildings':
        return createSmartBuildingScene(scene);
      case 'manufacturing':
        return createManufacturingScene(scene);
      case 'energy':
        return createEnergyScene(scene);
      default:
        return createSmartBuildingScene(scene);
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Sky blue background
    sceneRef.current = scene;

    // Isometric camera setup
    const camera = new THREE.PerspectiveCamera(45, 3/2, 0.1, 1000);
    camera.position.set(8, 6, 8);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
    renderer.setClearColor(0x87CEEB);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting setup for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Create industry-specific scene
    const animationObjects = createIndustryScene(industry, scene);

    setIsLoading(false);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Industry-specific animations
      if (industry === 'energy' && animationObjects.turbines) {
        animationObjects.turbines.forEach((turbine: THREE.Group) => {
          turbine.rotation.z += 0.05;
        });
      }

      if (industry === 'manufacturing' && animationObjects.roboticArms) {
        animationObjects.roboticArms.forEach((arm: THREE.Mesh, index: number) => {
          arm.rotation.z = Math.sin(Date.now() * 0.002 + index) * 0.3;
        });
      }

      if (industry === 'buildings' && animationObjects.devices) {
        animationObjects.devices.forEach((device: THREE.Mesh, index: number) => {
          if (device.material && (device.material as THREE.MeshBasicMaterial).emissive) {
            const intensity = 0.3 + Math.sin(Date.now() * 0.003 + index) * 0.2;
            (device.material as THREE.MeshBasicMaterial).emissiveIntensity = intensity;
          }
        });
      }

      // Slight camera movement for dynamic feel
      camera.position.x = 8 + Math.sin(Date.now() * 0.0003) * 0.5;
      camera.position.z = 8 + Math.cos(Date.now() * 0.0003) * 0.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && renderer && camera) {
        const width = mountRef.current.offsetWidth;
        const height = mountRef.current.offsetHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [industry]);

  return (
    <div className={`relative ${className}`}>
      {/* Device frame - phone/tablet style */}
      <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 p-4">
        {/* Device bezel */}
        <div className="relative bg-black p-2 mx-auto max-w-sm">
          {/* Screen area */}
          <div className="relative bg-background dark:bg-card border-2 border-gray-800 overflow-hidden aspect-[3/2]">
            <div
              ref={mountRef}
              className="w-full h-full"
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                <div className="text-blue-600 text-sm">Loading 3D environment...</div>
              </div>
            )}
            
            {/* Floating UI elements overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* IoT sensor indicators */}
              <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 text-xs font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
                Live
              </div>
              
              <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 text-xs font-medium">
                24°C
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 px-2 py-1 text-xs font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-orange-400"></div>
                {industry === 'buildings' ? '8 Devices' : industry === 'manufacturing' ? '12 Machines' : '6 Turbines'}
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 text-xs font-medium">
                98% Uptime
              </div>

              {/* Floating sensor dots */}
              <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-500/70 animate-pulse"></div>
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-green-500/70 animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-orange-500/70 animate-pulse"></div>
            </div>
          </div>
          
          {/* Device home indicator */}
          <div className="w-20 h-1 bg-gray-600 mx-auto mt-2"></div>
        </div>
        
        {/* Ambient lighting effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}