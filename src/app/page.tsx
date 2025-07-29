import { redirect } from 'next/navigation';

export default function Home() {
  // This will only be called for the root path '/'
  // The middleware will handle the redirect to '/es'
  redirect('/es');
}
