const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    namaLengkap: {
      type: String,
      require: true,
      trim: true,
    },
    namaPanggilan: {
      type: String,
      trim: true,
      default: '',
    },
    sekolah: {
      type: String,
      trim: true,
      default: '',
    },
    kelas: {
      type: String,
      require: true,
      trim: true,
    },
    nis: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    mobile: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    tanggalLahir: {
      type: String,
      default: '01-01-2010',
    },
    jenisKelamin: {
      type: String,
      default: 'male',
    },
    password: {
      type: String,
      require: true,
    },
    enrolled: {
      type: Array,
      default: [],
    },
    image: {
      type: Object,
      default: { url: '' },
    },
    avatarLetter: {
      type: String,
    },
    score: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Student', studentSchema);
