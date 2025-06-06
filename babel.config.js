module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@hooks': './src/hooks',
            '@store': './src/store',
            '@types': './src/types',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@assets': './src/assets',
            '@api': './src/api',
            '@services': './src/services',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
}; 