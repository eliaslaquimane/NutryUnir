import React from 'react';
import { Animated, Image, Platform } from 'react-native';

interface HeaderAnimadoProps {
  headerOpacity: any;
  image: any;
  name: string;
  NAME_MIN_SIZE: number;
  scientificName?: string;
}

export default function HeaderAnimado({ headerOpacity, image, name, NAME_MIN_SIZE, scientificName }: HeaderAnimadoProps) {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: Platform.OS === 'android' ? 0 : 32,
        left: 0,
        right: 0,
        height: 86,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        opacity: headerOpacity,
        zIndex: 10,
      }}
      pointerEvents="none"
    >
      <Image
        source={typeof image === 'string' ? { uri: image } : image}
        style={{ width: 40, height: 40, borderRadius: 8, marginRight: 12 }}
      />
      <Animated.Text style={{ fontSize: NAME_MIN_SIZE, fontWeight: 'bold', color: '#1e293b' }}>
        {name}
        {scientificName ? (
          <Animated.Text style={{ fontStyle: 'italic', color: '#64748b', fontSize: 18 }}>
            {'  |  '}{scientificName}
          </Animated.Text>
        ) : null}
      </Animated.Text>
    </Animated.View>
  );
}
