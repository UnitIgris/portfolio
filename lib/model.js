import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  // Texture loader
  const textureLoader = new THREE.TextureLoader()

  // Textures
  const bakedTexture = textureLoader.load('Final4KRoom2.jpg')
  bakedTexture.flipY = false
  bakedTexture.encoding = THREE.sRGBEncoding

  // Materials
  const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture })

  // Lights
  //const poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffe5 })
  return new Promise((resolve, reject) => {
    const gltfLoader = new GLTFLoader()
    gltfLoader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene
        obj.name = 'room'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          child.material = bakedMaterial
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
