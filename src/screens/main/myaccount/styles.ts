import {StyleSheet} from 'react-native';
import { FONT_SIZE } from '../../../theme/Fonts';
import { vp } from '../../../utils';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4285F4',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  profilePictureContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#4285F4',
    alignItems: 'center',
    marginBottom: vp(20),
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: vp(20),
  },
  logoutButton: {
    backgroundColor: '#d9534f',
  },
});
