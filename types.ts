
export enum AppointmentStatus {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled'
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

export interface Appointment {
  id: string;
  serviceId: string;
  customerName: string;
  phone: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  venue?: string;
}

export interface Notification {
  id: string;
  type: 'Appointment' | 'Document Verification' | 'Announcement' | 'Application Status';
  message: string;
  time: string;
  isNew: boolean;
}
