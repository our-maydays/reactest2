import { useEffect, useRef, useState} from 'react'

const Intersect = ({ children, ...props }) => {
	const ref = useRef()
	const [intersect, setIntersect] = useState(false)
	const observer = new IntersectionObserver(([entry]) => {

		if (entry.isIntersecting) {
			setIntersect(true)
			observer.disconnect()
		}

	}, {threshold: 0.3})

	useEffect( () => {
		observer.observe(ref.current)
		return () => observer.disconnect()
	}, [])

	return (
		<>
			<div ref={ref} 
				{...(intersect ? props : {style: {visibility: 'hidden'}})}
				style={{margin: 0, padding: 0, border: 'none', outline: 'none'}}
			>
				{children}
			</div>
		</>
	)
}

export default Intersect
