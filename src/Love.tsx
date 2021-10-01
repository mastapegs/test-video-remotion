import { Sequence, useVideoConfig, interpolate, useCurrentFrame } from 'remotion'
import { FC } from 'react'

interface LoveProps {
  firstText: string;
  secondText: string;
}

export const Love: FC<LoveProps> = ({firstText, secondText}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig()

  const secondTextFrameIn = 90
  const fadeInTime = 60
  
  const firstTextOpacity = interpolate(frame, [0, fadeInTime], [0, 1])
  const secondTextOpacity = interpolate(frame, [secondTextFrameIn, secondTextFrameIn + fadeInTime], [0, 1])
  
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
		<div>
			<Sequence from={0} durationInFrames={durationInFrames}>
				<div style={{
          color: "hsl(0, 100%, 70%)",
          position: "absolute",
          top: 200,
          left: 400,
          fontSize: 200,
          opacity: firstTextOpacity,
				}}
				>{firstText}
				</div>
			</Sequence>
			<Sequence from={secondTextFrameIn} durationInFrames={durationInFrames - secondTextFrameIn}>
				<div style={{
          color: "hsl(0, 100%, 70%)",
          position: "absolute",
          top: 600,
          left: 400,
          fontSize: 200,
          opacity: secondTextOpacity,
				}}
				>{secondText}
				</div>
			</Sequence>
		</div>
	</div>
  )
}