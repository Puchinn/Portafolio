import { useContext } from 'react'
import { ThemeContext } from '../context/darkTheme'

function DarkModeButton() {
  const [color, setColor] = useContext(ThemeContext)

  return (
    <button
      onClick={() => {
        const newColorMode = color === 'dark' ? 'light' : 'dark'
        setColor(newColorMode)
      }}
      className='rounded-full opacity-80 hover:bg-white hover:bg-opacity-20 hover:opacity-100 sm:mr-3'
    >
      <svg
        className='h-auto w-12 fill-yellow-400 dark:fill-white '
        xmlns='http://www.w3.org/2000/svg'
        width='472.39'
        height='472.39'
        viewBox='0 0 472.39 472.39'
      >
        <g className='toggle-sun rotate-0 [transform-origin:center_center] [transition:transform_750ms] dark:rotate-[0.5turn] '>
          <path d='M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z' />
        </g>
        <g className='toggle-circle [transition:transform_500ms_ease-out] dark:translate-x-[-15%]'>
          <circle className='cls-1' cx='236.2' cy='236.2' r='103.78' />
        </g>
      </svg>
    </button>
  )
}

export default DarkModeButton
