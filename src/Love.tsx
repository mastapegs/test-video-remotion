import { Sequence, useVideoConfig, interpolate, useCurrentFrame } from 'remotion'
import { FC } from 'react'

interface LoveProps {
  text: string;
}

export const Love: FC<LoveProps> = ({text}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig()

  const opacity = interpolate(frame, [0, 30], [0, 1])
  
  return (
	<div style={{ 
    flex: 1, 
    backgroundColor: "black", 
    display: 'flex', 
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "Arial, Helvetica, sans-serif"
	}}
	>
		<div style={{opacity}}>
			<Sequence from={0} durationInFrames={durationInFrames}>
				<div style={{
          color: "hsl(0, 100%, 50%)",
          position: "absolute",
          top: 400,
          left: 400,
          fontSize: 200,
				}}
				>{text}
				</div>
			</Sequence>
		</div>
	</div>
  )
}