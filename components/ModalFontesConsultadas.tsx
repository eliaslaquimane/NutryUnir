import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

interface ModalFontesConsultadasProps {
  showFontes: boolean;
  setShowFontes: (show: boolean) => void;
  fontesConsultadas: string[];
  styles: any;
}

export default function ModalFontesConsultadas({ showFontes, setShowFontes, fontesConsultadas, styles }: ModalFontesConsultadasProps) {
  return (
    <Modal
      visible={showFontes}
      transparent
      animationType="fade"
      onRequestClose={() => setShowFontes(false)}
    >
      <Pressable style={styles.modalOverlay} onPress={() => setShowFontes(false)}>
        <View style={styles.fonteModalContainer}>
          <Text style={styles.fonteTitulo}>Fonte Consultada</Text>
          {fontesConsultadas.map((fonte, index) => (
            <Text key={index} style={styles.fonteItem}>
              {fonte}
            </Text>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
}
