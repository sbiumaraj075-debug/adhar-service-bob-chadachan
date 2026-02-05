
import { Service, AppointmentStatus, Appointment, Notification } from './types';

export const SERVICES: Service[] = [
  { id: '1', title: 'Update Name/DOB', subtitle: 'ಹೆಸರು ಮತ್ತು ಜನ್ಮ ದಿನಾಂಕ', icon: 'badge', color: 'blue' },
  { id: '2', title: 'Change Address', subtitle: 'ಹೊಸ ವಿಳಾಸ ಬದಲಾವಣೆ', icon: 'home', color: 'green' },
  { id: '3', title: 'Link Mobile', subtitle: 'ಮೊಬೈಲ್ ನಂಬರ್ ಲಿಂಕ್', icon: 'phonelink_setup', color: 'orange' },
  { id: '4', title: 'Biometric Update', subtitle: 'ಬಯೋಮೆಟ್ರಿಕ್ ಅಪ್‌ಡೇಟ್', icon: 'fingerprint', color: 'purple' },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'AP12345',
    serviceId: '1',
    customerName: 'Rajesh Kumar',
    phone: '+91 98XXX XXXXX',
    date: '12 Oct 2024',
    time: '10:30 AM - 11:00 AM',
    status: AppointmentStatus.PENDING,
    venue: 'Bank of Baroda Service Center'
  },
  {
    id: 'AP12346',
    serviceId: '3',
    customerName: 'Sudha N.',
    phone: '+91 73XXX XXXXX',
    date: '12 Oct 2024',
    time: '09:15 AM - 09:45 AM',
    status: AppointmentStatus.COMPLETED,
    venue: 'Main Post Office, Chadchan'
  },
  {
    id: 'AP12347',
    serviceId: '4',
    customerName: 'Manjunath K.',
    phone: '+91 88XXX XXXXX',
    date: '12 Oct 2024',
    time: '11:45 AM - 12:15 PM',
    status: AppointmentStatus.PENDING,
    venue: 'District Center, Bijapur'
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'Appointment',
    message: 'Reminder: Appointment tomorrow at 10 AM',
    time: '10 min ago',
    isNew: true
  },
  {
    id: '2',
    type: 'Document Verification',
    message: 'Your PAN card has been verified',
    time: '20 min ago',
    isNew: true
  },
  {
    id: '3',
    type: 'Announcement',
    message: 'New service available: Aadhaar update via Mobile',
    time: '30 min ago',
    isNew: true
  },
  {
    id: '4',
    type: 'Application Status',
    message: 'Your application for Aadhaar update is under review',
    time: '2 hr ago',
    isNew: false
  }
];
