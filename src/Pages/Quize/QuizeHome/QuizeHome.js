import React from 'react';

const QuizeHome = () => {
    return (
        <div className=''>
            
          <div className="grid grid-cols-1 gap-3 mt-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* card-1 */}
              <div className="p-4 transition-shadow border-t border-green-300 rounded-lg shadow-sm hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-400">মোট অংশগ্রহণ কারী
</span>
                    <span className="text-lg font-semibold">100,221</span>
                  </div>
                  <div>
                      <img className='object-cover border-2 border-blue-400 w-20 h-20 rounded-lg' src='https://i.ibb.co/8gPQvHz/undraw-Connected-re-lmq2.png'/>
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                  <span className='pl-2'>from 2019</span>
                </div>
              </div>

              {/* card 2 */}
              <div className="p-4 transition-shadow border-b border-green-300 rounded-lg shadow-sm hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-400">মোট কুইজ</span>
                    <span className="text-lg font-semibold">100,221</span>
                  </div>
                  <div>
                      <img className='object-cover border-2 border-blue-400 w-20 h-20 rounded-lg' src='https://i.ibb.co/9nZf9H7/undraw-Quiz-re-aol4.png'/>
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                  <span className='pl-2'>from 2019</span>
                </div>
              </div>
              {/* card 3 */}
              <div className="p-4 transition-shadow border-t border-green-300 rounded-lg shadow-sm hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-400">লিডার বোর্ড
</span>
                    
                  </div>
                  <div>
                      <img className='border-2 border-blue-400 object-cover w-20 h-20 rounded-lg' src='https://i.ibb.co/ZXxFmk9/undraw-visual-data-re-mxxo.png'/>
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                  <span className='pl-2'>from 2019</span>
                </div>
              </div>
              {/* card-4 */}
              <div className="p-4 transition-shadow border-b border-green-300 rounded-lg shadow-sm hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-400">ফলাফল</span>
                    <span className="text-lg font-semibold">100,221</span>
                  </div>
                  <div>
                      <img className='object-cover border-2 border-blue-400 w-20 h-20 rounded-lg' src='https://i.ibb.co/JdHKJXJ/undraw-Site-stats-re-ejgy-1.png'/>
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                  <span className='pl-2'>from 2019</span>
                </div>
              </div>
            
          </div>

          

          
        </div>
    );
};

export default QuizeHome;