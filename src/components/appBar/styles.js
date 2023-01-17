import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    backgroundColor: '#FAFFFD',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 38,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowColor: '#323031',
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 5
  },
  appBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA824C',
    borderRadius: 12,
    padding: 12,
    height: 44
  },
  buttonText: {
    color: '#FAFFFD',
    textTransform: 'uppercase',
    fontWeight: '700'
  }
})
