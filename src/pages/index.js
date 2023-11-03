import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Blogging App</title>
        <meta name="description" content="Find the best doctors in your area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4 m-4">
          <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://picsum.photos/200/300"
              class="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div>
            <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
            <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI</h3>
            <p class="mt-1 text-gray-500">Sailboat UI helps streamline software projects, sprints, tasks, and bug tracking.</p>
            <div class="mt-4 flex gap-2">
              <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                Design
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                Product
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                Develop
              </span>
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4 m-4">
          <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://picsum.photos/200/300"
              class="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div>
            <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
            <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI</h3>
            <p class="mt-1 text-gray-500">Sailboat UI helps streamline software projects, sprints, tasks, and bug tracking.</p>
            <div class="mt-4 flex gap-2">
              <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                Design
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                Product
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                Develop
              </span>
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4 m-4">
          <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://picsum.photos/200/300"
              class="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div>
            <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
            <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI</h3>
            <p class="mt-1 text-gray-500">Sailboat UI helps streamline software projects, sprints, tasks, and bug tracking.</p>
            <div class="mt-4 flex gap-2">
              <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                Design
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                Product
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                Develop
              </span>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4 m-4">
          <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://picsum.photos/200/300"
              class="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div>
            <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
            <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI</h3>
            <p class="mt-1 text-gray-500">Sailboat UI helps streamline software projects, sprints, tasks, and bug tracking.</p>
            <div class="mt-4 flex gap-2">
              <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                Design
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                Product
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                Develop
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
