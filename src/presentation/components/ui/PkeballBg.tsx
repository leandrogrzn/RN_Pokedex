import { useContext } from "react";
import { Image, ImageStyle, StyleProp } from "react-native";
import { thmemeContext } from "../../context/ThemeContext";

interface Props {
  style?: StyleProp<ImageStyle>,
}

export const PokeballBg = ({ style }: Props) => {

  const { isDark } = useContext( thmemeContext );

  const pokeballImg = isDark
  ? require('../../../assets/pokeball-light.png')
  : require('../../../assets/pokeball-dark.png')

  return (
    <Image
      source={ pokeballImg }
      style={[
        {
          width: 300,
          height: 300,
          opacity: 0.3,
        },
        style,
      ]}
    />
  )
}
