# hackathon-ui
React native based UI


#changes to be done in react-native-snap-carousel node module post npm install


1. remove instance of viewPropType from node_modules\react-native-snap-carousel\src\carousel.js , pagination.js, paginationDot.js, parallaxImage.js.
2. var stylePropType = require('react-style-proptype'); in all above files.
3. replace all instances of ViewPropTypes ? ViewPropTypes.style : View.propTypes.style with stylePropType.
4. use stylePropType in place of viewPropType.
