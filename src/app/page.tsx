import { permanentRedirect } from 'next/navigation';

export default function Home() {
  // 308 so Google consolidates `/` into `/es` (307 was keeping `/` indexed).
  permanentRedirect('/es');
}
