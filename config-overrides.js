const { override, fixBabelImports  } = require('customize-cra');
const addLessLoader = require("customize-cra-less-loader");

module.exports = override(
  // Load antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // Add `javascriptEnabled` and antd theme configuration
  // to the Less loader
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': 'black',
        }
      }
    }
  }),
);


