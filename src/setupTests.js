import '@testing-library/jest-dom';
import {TextDecoder, TextEncoder} from 'util';

// react-router v7 memakai TextEncoder/TextDecoder yang tidak disediakan jsdom.
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}
