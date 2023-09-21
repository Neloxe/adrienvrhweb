/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
import { COLORS, phoneSize } from '../export/style'

function Button({
  children,
  setHover,
  hover,
  text,
  invert,
  onMouseDown,
  padding,
}) {
  const styles = {
    border: {
      zIndex: 10,
      fontFamily: 'SFProBold',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      display: 'flex',
      padding: padding === undefined ? 9 : padding,
    },
    selected: {
      backgroundColor: invert
        ? hover
          ? COLORS.lightBlack
          : COLORS.white
        : hover
        ? COLORS.white
        : 'transparent',
      color: hover ? COLORS.lightBlack : COLORS.white,

      borderRadius: 40,
      cursor: 'pointer',
    },
  }

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseOver={() => {
        setHover(true)
      }}
      onMouseOut={() => {
        setHover(false)
      }}
      style={{
        ...styles.border,
        marginRight: window.innerWidth < phoneSize ? 0 : 20,
        ...styles.selected,
      }}
    >
      {children}
      {window.innerWidth < phoneSize ? '' : text}
    </div>
  )
}

export default Button
