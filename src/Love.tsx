import { Sequence, useVideoConfig } from 'remotion'
import { FC } from 'react'

export const Love: FC = () => {
  const { durationInFrames } = useVideoConfig()
  return (
	<div style={{ flex: 1, backgroundColor: "black" }}>
		<div>
			<Sequence from={0} durationInFrames={durationInFrames}>
				<div style={{color: "white"}}>Hello, World!</div>
			</Sequence>
		</div>
	</div>
  )
}