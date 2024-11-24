const students = ref([])

const student = ref({
  name: '',
  score: null,
  dob: '',
})
let isEditing = ref(false)
let editingIndex = ref(null)

function submitForm() {
  if (isEditing.value) {
    students.value[editingIndex.value] = { ...student.value }
    isEditing.value = false
    editingIndex.value = null
    console.log(students.value)
  } else {
    students.value.push({ ...student.value })
    console.log(students.value)
  }
  resetForm()
}
function editStudent(index) {
  student.value = { ...students.value[index] }
  isEditing.value = true
  editingIndex.value = index
}

function deleteStudent(index) {
  students.value.splice(index, 1)
}

function resetForm() {
  student.value = {
    name: '',
    score: null,
    dob: '',
  }
}
