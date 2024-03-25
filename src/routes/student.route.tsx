import { Route } from 'react-router-dom';
import CreateArticle from '../pages/student/CreateArticle.page';
import StudentHome from '../pages/student/StudentHome.page';
import MyArticles from '../pages/student/MyArticles.page';
import MyAccount from '../pages/student/MyAccount.page'
function StudentRoute() {
  return (
    <>
      <Route path='/Student' element={<StudentHome />} />
      <Route path='/CreateArticle' element={<CreateArticle />} />
      <Route path='/MyArticles' element={<MyArticles />} />
      <Route path='/MyAccount' element={<MyAccount />} />
    </>
  );
}

export default StudentRoute;