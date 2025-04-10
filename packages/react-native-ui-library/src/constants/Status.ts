export const statusText: { [key: string]: string } = {
  new: 'Pendiente',
  canceled: 'Cancelada',
  'deposit-confirmed': 'Depósito confirmado',
  'exchange-executed': 'Divisas compradas',
  'ready-for-collection': 'Listo para retiro',
  wired: 'Transferido',
  billed: 'Facturado',
};

export const statusColor: { [key: string]: string } = {
  new: '#959798',
  canceled: '#F83333',
  'deposit-confirmed': '#F8B133',
  'exchange-executed': '#54D7E8',
  'ready-for-collection': '#36ADAC',
  wired: '#377BB5',
  billed: '#5DB85C',
};
