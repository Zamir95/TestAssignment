const users = [
  { id: 1, name: 'John', email: 'john@test.com', department: 'IT' },
  { id: 2, name: 'Doe', email: 'Doe@test.com', department: 'Marketing' },
  { id: 3, name: 'Morgan', email: 'Morgan@test.com', department: 'IT' },
  { id: 4, name: 'Martha', email: 'Martha@test.com', department: 'Marketing' },
  { id: 5, name: 'Dave', email: 'Dave@test.com', department: 'Sales' },
  { id: 6, name: 'Oslo', email: 'Oslo@test.com', department: 'Sales' },
  { id: 7, name: 'Qiev', email: 'Qiev@test.com', department: 'Product' },
  { id: 8, name: 'Hanzel', email: 'Hanzel@test.com', department: 'Product' },
  { id: 9, name: 'Mats', email: 'Mats@test.com', department: 'Sales' },
  { id: 10, name: 'Yoshimura', email: 'Yoshimura@test.com', department: 'IT' }
];

const tasks = [
  { id: 1, department: 'IT', title: 'Develop company landing page' },
  { id: 2, department: 'IT', title: 'Develop company API' },
  { id: 3, department: 'Product', title: 'Call customers' },
  { id: 4, department: 'Sales', title: 'Sells more!' },
  { id: 5, department: 'IT', title: 'QA' },
];

function mapUsersToTasks(users, tasks) {
  const result = tasks.map(task => {
    const taskUsers = users.filter(user => user.department === task.department);
    return Object.assign({}, task, { users: taskUsers.slice() });
  });

  return result;
}

const result = mapUsersToTasks(users, tasks);
console.log(result);
