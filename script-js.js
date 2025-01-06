let items = [];
let claimedCount = 0;
let currentFilter = 'all';
let currentClaimIndex = -1;
let isFirstItemAdded = false;

function updateStats() {
    document.getElementById('totalItems').textContent = items.length;
    document.getElementById('unclaimedItems').textContent = items.length - claimedCount;
    document.getElementById('claimedItems').textContent = claimedCount;
}

function addItem(event) {
    event.preventDefault();
    const form = event.target;
    const newItem = {
        finder: form.finder.value,
        itemName: form.itemName.value,
        lastSeen: form.lastSeen.value,
        date: form.date.value,
        gradeLevel: form.gradeLevel.value,
        strand: form.strand.value,
        section: form.section.value,
        photo: form.photo.files[0] ? URL.createObjectURL(form.photo.files[0]) : null,
        claimed: false,
        claimInfo: null
    };
    items.push(newItem);
    
    // First time item is added
    if (!isFirstItemAdded) {
        isFirstItemAdded = true;
        document.querySelector('.stats').style.display = 'flex';
        document.querySelector('.items-container').style.display = 'block';
        document.getElementById('privacyWarning').style.display = 'none';
    }
    
    displayItems();
    updateStats();
    form.reset();
    showPopup