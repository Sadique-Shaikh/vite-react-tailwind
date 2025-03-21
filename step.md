# step 1
npm create vite@latest ./my-app

# Select react as framework

# Install dependencies
cd my-app

# step 2
npm i three @react-three/fiber @react-three/drei @react-three/postprocessing react-responsive leva
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

vite-react-project/
│── node_modules/         # All installed dependencies (don't edit manually)
│── public/               # Static assets like images and icons
│   ├── favicon.svg       # Default Vite favicon
│── src/                  # Main source code directory
│   ├── assets/           # Store images, fonts, and other static files
│   ├── components/       # Reusable React components
│   ├── App.jsx           # Main React component
│   ├── main.jsx          # Entry point (renders React app)
│── .gitignore            # Files to ignore in Git repositories
│── index.html            # Root HTML file (Vite injects your app here)
│── package.json          # Project metadata & dependencies
│── vite.config.js        # Vite configuration file
│── README.md             # Documentation file

# step 3
npm start dev

## ---------------------------------------------------------
## Geometry (Shape of the Object)
<sphereGeometry args={[radius, widthSegments, heightSegments]} />
<boxGeometry args={[width, height, depth]} />
<cylinderGeometry args={[topRadius, bottomRadius, height, radialSegments]} />
<coneGeometry args={[radius, height, radialSegments]} />
<torusGeometry args={[radius, tube, radialSegments, tubularSegments]} />
<planeGeometry args={[width, height]} />
<tetrahedronGeometry args={[radius]} />

## ---------------------------------------------------------

## 🔥 Basic Materials
<meshBasicMaterial color="red" /> // No lighting effects, just a solid color
<meshLambertMaterial color="blue" /> // Reacts to light, good for soft shading
<meshPhongMaterial color="green" shininess={100} /> // Adds specular highlights
<meshStandardMaterial color="yellow" metalness={0.5} roughness={0.2} />
<meshPhysicalMaterial clearcoat={1} clearcoatRoughness={0} />
<meshToonMaterial color="purple" />
<meshNormalMaterial />
<meshDepthMaterial />

## 🔹 Common Maps
map – Diffuse color texture
normalMap – Adds fine surface details
bumpMap – Fake depth effect
roughnessMap – Controls surface roughness
metalnessMap – Defines metallic parts
alphaMap – Transparency control

## Lighting Effects in Mesh
<directionalLight position={[2, 5, 3]} intensity={1} />
<pointLight position={[0, 2, 2]} intensity={2} />
<ambientLight intensity={0.5} />



## Events:
onPointerOver → Hover effect
onPointerOut → Unhover effect
onClick → Click interaction
onPointerDown / onPointerUp
onPointerMove

## For effects like sparkles, smoke, fire, or floating particles, you can use @react-three/drei.
.

## 🔥 What Else Can You Add?
✅ Shadows (castShadow, receiveShadow)
✅ Fog (<fog attach="fog" args={["white", 5, 20]} />)
✅ Clipping Planes (Hiding parts of a mesh)
✅ InstancedMesh (Rendering many objects efficiently)
✅ Post-processing effects (glow, blur, outline)
