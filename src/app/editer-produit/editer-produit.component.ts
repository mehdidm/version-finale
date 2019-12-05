import { Component, OnInit } from "@angular/core";
import { produit } from "../produit";
import { ProduitService } from "../produit.service";
import { ActivatedRoute, Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: "app-editer-produit",
  templateUrl: "./editer-produit.component.html",
  styleUrls: ["./editer-produit.component.css"]
})
export class EditerProduitComponent implements OnInit {
  produit: produit;
  id: number;
  libelle: string;
  description: string;
  image: string = "";
  prix: number;
  nbStock: number;
  stock: boolean;
  submitted: boolean = false;

  date: Date;

  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  message: string="From has been reset";
  action2: string="";
  constructor(
    private produitsservice: ProduitService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params["id"]);
    var id = this.route.snapshot.params["id"];
    this.produit = this.produitsservice.getProduitId(id);
  }

  editerProduit() {
    if (this.produitsservice.getProduitId(this.id) != null) {
      this.produitsservice.editerProduitserv(
        this.id,
        this.libelle,
        this.description,
        this.image,
        this.prix,
        this.nbStock,
        this.stock,
        this.date
      );
      this.router.navigate(["/list-produit"]);
    } else {
      this.message = "L'Id entré n'existe pas !";
      this.submitted = true;
    }
  }
  openSnackBar(message: string, action2: string) {
    this._snackBar.open("Product has been Edited Successfully!", action2, {
      duration: 2000,
    });
  }
  openSnackBarReset(message: string, action: string) {
    this._snackBar.open(this.message, action, {
      duration: 2000,
    });
  }
  versProduit() {
    this.router.navigate(["/list-produit"]);
  }
}
