import { Theme } from './styled'

export const themes: Record<string, Theme> = {
  light: {
    colors: {
      primaryText: '#FFFFFF', // question text color
      secondaryText: '#FFFFFF', // answer text color
      themeText: '#FFFFFF', //white
      themeColor: '#2986cc', //blue
      themeGradient: 'linear-gradient(90deg, #444444 0%, #5b5b5b 100%)',
      background: 'linear-gradient(90deg, #5b5b5b 0%, #134f5c 100%)',
      cardBackground: '#241a1a',
      selectTopicBg: '#21191C',
      appLogo: '#FFFFFF',
      buttonText: '#000000',
      outlineButtonText: '#ffffff',
      buttonBackground: 'linear-gradient(90.04deg, #800080 0.03%, #FFC0CB 99.96%)',
      selectedAnswer: '#151113',
      infoText: '#FF783F', // skip tag text
      infoBackground: '#ffb23f26', // skip tag background
      border: 'transparent',
      answerBg: '#151113',
      disabledCard: '#00000080',
      disabledButton: '#181214',
      success: '#12B40E',
      successLight: '#151113',
      danger: '#FF143E',
      dangerLight: '#151113',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#282526',
      darkGray: '#9fa3a9',
      darkerGray: '#817a8e',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    },
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    },
    paddings: {
      container: '15px',
      pageTop: '30px',
    },
    margins: {
      pageTop: '30px',
    },
  },
}
