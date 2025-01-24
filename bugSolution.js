```javascript
// bug.js
import React from 'react';
import { Image } from 'expo-image';

export default function App() {
  const uri = 'https://example.com/image with space.jpg'; // URI with space
  return (
    <Image source={{ uri }} style={{ width: 200, height: 200 }} />
  );
}

// bugSolution.js
import React from 'react';
import { Image } from 'expo-image';

export default function App() {
  const uri = 'https://example.com/image with space.jpg';
  const encodedUri = encodeURIComponent(uri);
  return (
    <Image source={{ uri: encodedUri }} style={{ width: 200, height: 200 }} />
  );
}
```