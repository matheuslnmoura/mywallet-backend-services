

async function checkIfValueAndTypeExists(value, type) {
  if (!value || !type) {
    return false
  }

  return true;

}

async function validateValueAndtype(value, type) {
  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) {
    throw {type: 400, message: 'Invalid type'}
  }

  if (value < 0) {
    throw {type: 400 , message: 'Please, insert only positive numbers'}
  }

  return;
}

function sumEvents(events) {
  const sum = events.rows.reduce(
    (total, event) =>
      event.type === "INCOME" ? total + event.value : total - event.value,
    0
  );
  
  return sum;
}

const financialEventsServices = {
  checkIfValueAndTypeExists,
  validateValueAndtype,
  sumEvents
}

export default financialEventsServices;