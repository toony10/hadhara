'use client';

import React from 'react';
import SubjectHeader from '../commponents/custome/SubjectHeader';

// Components
import Purpose from '../commponents/mummification/Purpose';
import Materials from '../commponents/mummification/Materials';
import Furniture from '../commponents/mummification/Furniture';

function Mummification() {
    return (
        <div>
            <div className="w-full">
                <SubjectHeader title="التحنيط" description="انغمس في أسرار التحنيط المثيرة واكتشف تفاصيلها الغامضة في مصر القديمة" backgroundImage="/assets/topic-headings/mummification.png" subTopics={
                    [
                        { title: 'الهدف منه', link: '/mummification/purpose' },
                        { title: 'المواد المستخدمه', link: '/mummification/materials' },
                        { title: 'الأثاث الجنائزي', link: '/mummification/tools' },
                        { title: 'تطور التحنيط', link: '/mummification/evolution' },
                        { title: 'الطرق والخطوات الأساسيه', link: '/mummification/steps' },
                        { title: 'الألهه المرتبطه بالتحنيط', link: '/mummification/gods' },
                        { title: 'دور الطب والسحر', link: '/mummification/medicine-magic' },
                        { title: 'المومياء واللعنه والعلم', link: '/mummification/curse-science' },
                        { title: 'تحنيط الحيوان', link: '/mummification/animal' },
                        { title: 'متحف التحنيط', link: '/mummification/museum' },
                    ]
                } />
                <section className='w-full'>
                    <Purpose />
                    <Materials />
                    <Furniture />
                </section>
            </div>
        </div>
    );
}

export default Mummification;