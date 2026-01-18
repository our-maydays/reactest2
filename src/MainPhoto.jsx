import './App.css'

import {useEffect, useRef} from 'react'
import mainphoto from './assets/images/DSC07876.jpg'

const MainPhoto = () => {

	const areaRef = useRef(null)
	
	useEffect(() => {
    const area = areaRef.current
    if (!area) return

    const img = area.querySelector('img')
    const flies = []
    let rafId

    const createFireflies = () => {
      const rect = area.getBoundingClientRect()
      const width = img.width
      const height = img.height
			{console.log({width} )}
			{console.log({height})}

      if (width === 0 || height === 0) return

      const COUNT = 20

      for (let i = 0; i < COUNT; i++) {
        const fly = document.createElement('span')
        fly.className = 'firefly'
				fly.style.left = Math.random() * width
        fly.style.top = Math.random() * height
				{/*
				fly.style.left = '0'
        fly.style.top = '0'
				*/}

        const speed = 1 + Math.random() * 1.2

        flies.push({
          el: fly,
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        })

        area.appendChild(fly)
      }

      const animate = () => {
        flies.forEach(f => {
          // 곡선용 노이즈
          f.vx += (Math.random() - 0.5) * 1
          f.vy += (Math.random() - 0.5) * 1

          f.x += f.vx
          f.y += f.vy

          if (f.x < 0 || f.x > width) f.vx *= -1
          if (f.y < 0 || f.y > height) f.vy *= -1

          f.el.style.transform = `translate(${f.x}px, ${f.y}px)`
        })

        rafId = requestAnimationFrame(animate)
      }

      animate()
    }

    if (img.complete) {
			createFireflies()
    } else {
      img.onload = () => createFireflies()
    }

    return () => {
      cancelAnimationFrame(rafId)
      flies.forEach(f => f.el.remove())
    }
  }, [])




	return (
		<div className= 'content-box'>

			<div ref={areaRef} style={{
				position: 'relative',
				overflow: 'hidden',
			}}>
				<img src={mainphoto} width={'90%'} style={{display:'block', margin: 'auto'}} />
			</div>
		</div>
	)
}

export default MainPhoto
