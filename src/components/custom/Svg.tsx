import dynamic from 'next/dynamic'
import type { FC } from 'react'
import { ComponentProps } from "react"

interface IProps extends ComponentProps<"svg"> {
  name: string
}

const Svg: FC<IProps> = ({ name, ...props }) => {
  const Svg = dynamic(() => import(`@/icons/${name}.svg`))

  return (
    <Svg {...props} aria-hidden="true" />
  )
}

export default Svg