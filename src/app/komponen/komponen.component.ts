import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Komponen } from './Komponen';
import { KomponenService } from './komponen.service';

@Component({
  selector: 'app-komponen',
  templateUrl: './komponen.component.html',
  styleUrls: ['./komponen.component.css'],
  providers: [KomponenService]
})
export class KomponenComponent implements OnInit {

  // untuk ngModel
  // id ='';
  // nama ='';
  // pilih ='';

  id!:string;

  komponenForm!: FormGroup;

  constructor(private komponenService: KomponenService, private route: ActivatedRoute) {
    this.komponenForm = new FormGroup({
      id : new FormControl(null, [Validators.required]),
      nama : new FormControl(null, [Validators.required]),
      pilih : new FormControl(null)
    });
   }

  ngOnInit(): void {



    this.route.params.subscribe(rute => {
      this.id = rute.id;
      if(this.id) {
        this.komponenService.getKategori(this.id).subscribe(hasil => {
          if(hasil) {
            this.komponenForm.get('id')?.setValue(hasil.id);
            this.komponenForm.get('nama')?.setValue(hasil.nama);
          }
        });
      }
    })
    

  }

  simpan() {
    if(this.komponenForm?.valid){
      const komponen = new Komponen();
      komponen.id = this.komponenForm?.controls.id.value;
      komponen.nama = this.komponenForm?.controls.nama.value;
      komponen.pilih = this.komponenForm?.controls.pilih.value; 
      console.log(komponen);
      this.komponenService.simpanKategori(komponen, false).subscribe(
        hasil => {
          console.log(hasil);
        }, error => {
          console.log(error);
        }
      );
    } else {
      alert('wajib diisi')
    }

    
  }

}
