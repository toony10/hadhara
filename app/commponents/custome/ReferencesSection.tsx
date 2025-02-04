import React from 'react';
import Link from 'next/link';
import { BookOpenIcon } from '@heroicons/react/24/outline';

// تعريف واجهة المرجع
interface Reference {
  title: string;
  link: string;
}

// تعريف واجهة خصائص المكون
interface ReferencesSectionProps {
  references: Reference[];
}

const ReferencesSection: React.FC<ReferencesSectionProps> = ({ references }) => {
  return (
    <section className="mt-10 p-6 bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl shadow-sm" dir="rtl">
      <h2 className="text-3xl font-extrabold mb-6 text-stone-800 border-b-2 border-stone-300 pb-3 text-right">
        📚 المراجع
      </h2>
      <div className="grid gap-4">
        { references.map((ref, index) => (
          <Link
            key={ index }
            href={ ref.link }
            target="_blank"
            rel="noopener noreferrer"
            className="block transform hover:scale-102 transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow border-r-4 border-stone-300 hover:bg-stone-50 transition-colors duration-300">
              <div className="text-right">
                <h3 className="text-lg font-medium text-stone-700 hover:text-stone-900 transition-colors duration-300">
                  { ref.title }
                </h3>
              </div>
              <BookOpenIcon className="w-6 h-6 text-stone-400 hover:text-stone-600 transition-colors duration-300" />
            </div>
          </Link>
        )) }
      </div>
    </section>
  );
};

export default ReferencesSection;
