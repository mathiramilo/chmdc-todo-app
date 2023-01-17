import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  itemCard: {
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 12,
    elevation: 5
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  cardTitle: {
    color: '#323031',
    fontSize: 20,
    fontWeight: '400'
  },
  cardPriority: {
    color: '#323031',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  critical: {
    color: '#e64545'
  },
  high: {
    color: '#FA824C'
  },
  medium: {
    color: '#F7B731'
  },
  low: {
    color: '#4CD97B'
  },
  cardDescription: {
    color: '#323031',
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 28
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardStatus: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskDone: {
    color: '#2192d8',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8
  },
  taskPending: {
    color: '#e620ae',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardActionButton: {
    marginLeft: 16
  },
  cardActionIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  }
})
