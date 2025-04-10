import React from 'react';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from './ModalHome.styles';
import { ModalHomeProps } from './ModalHome.types';

export default function ModalHomeView({
  modalVisible,
  hideModal,
}: ModalHomeProps) {
  // eslint-disable-next-line
  const handleOutsidePress = (e: any) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };

  return (
    <Modal
      animationType="none"
      transparent
      visible={modalVisible}
      onRequestClose={hideModal}
      onDismiss={hideModal}
      style={{ zIndex: 1 }}
    >
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.gridContent}>
              <></>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
