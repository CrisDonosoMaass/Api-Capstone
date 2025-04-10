import { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { numericFormatter } from 'react-number-format';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';
import { useLocaleNumericFormat } from '../../../hooks/useLocaleNumericFormat';

interface RowDataProps {
  label: string;
  data?: string;
  component?: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
  noBorder?: boolean;
  currency?: string;
}

interface HeaderProps {
  title: string;
  subtitle: string;
  selectableTitle?: boolean;
  selectableSubtitle?: boolean;
  isTransfer?: boolean;
}

interface ExitModalProps {
  hideModal: () => void;
  style?: ViewStyle;
}

export function ExitModal({ hideModal, style }: ExitModalProps) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={hideModal} style={[styles.exitModal, style]}>
      <SimpleLineIcons name="close" size={32} color={colors.secondary} />
    </TouchableOpacity>
  );
}
export function Header({
  title,
  subtitle,
  selectableTitle,
  selectableSubtitle,
  isTransfer = false,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text
        style={styles.titleModal}
        variant="labelSmall"
        selectable={selectableTitle}
        allowFontScaling={false}
      >
        {title}
      </Text>
      <View style={styles.profileIconRow}>
        <View style={styles.profileIcon}>
          <Ionicons
            name={isTransfer ? 'send-sharp' : 'body-sharp'}
            size={22}
            color={Colors.blue}
          />
        </View>
        <Text
          style={styles.subtitleModal}
          variant="displaySmall"
          selectable={selectableSubtitle}
          allowFontScaling={false}
        >
          {subtitle}
        </Text>
        <View style={styles.profileIcon} />
      </View>
    </View>
  );
}

export function TitleData({ label }: { label: string }) {
  return (
    <Text
      allowFontScaling={false}
      style={styles.titleData}
      variant="labelSmall"
    >
      {label}
    </Text>
  );
}
export function RowData({
  label,
  data,
  component,
  icon,
  color = Colors.blue,
  noBorder = false,
  currency,
}: RowDataProps) {
  const numericFormat = useLocaleNumericFormat(currency);

  const formatterNumber = useCallback(
    (value: string) => {
      return currency + ' ' + numericFormatter(value, numericFormat);
    },
    [numericFormat, currency],
  );
  return (
    <View style={[styles.contentData, { borderBottomWidth: noBorder ? 0 : 1 }]}>
      <View style={styles.dataTitle}>
        <Text
          selectable
          style={{ fontSize: 10, letterSpacing: 0, lineHeight: 13 }}
          variant="labelSmall"
        >
          {label}
        </Text>
      </View>
      <View style={styles.dataContent}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        {component && <View>{component}</View>}
        {data && (
          <Text
            selectable
            style={{
              letterSpacing: 0,
              color,
              height: 'auto',
              width: 'auto',
            }}
            variant="labelSmall"
          >
            {currency ? formatterNumber(data) : data}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
  },
  titleModal: {
    fontSize: 10,
    letterSpacing: 0,
    lineHeight: 13,
    textAlign: 'center',
    marginTop: 28,
  },
  subtitleModal: {
    flex: 5,
    fontSize: 25,
    textAlign: 'center',
    color: Colors.blue,
  },
  profileIconRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleData: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    minHeight: 40,
    textAlignVertical: 'center',
    paddingLeft: 10,
    color: Colors.blue,
    borderBottomWidth: 1,
    borderColor: Colors.gray,
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 18,
  },
  contentData: {
    flex: 1,
    minHeight: 40,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: Colors.gray,
    flexDirection: 'row',
    display: 'flex',
    columnGap: 10,
  },
  dataTitle: {
    flex: 2,
    justifyContent: 'center',
    maxWidth: 100,
  },
  dataContent: {
    flex: 3,
    minHeight: 40,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  exitModal: {
    position: 'absolute',
    right: 16,
    top: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
});
