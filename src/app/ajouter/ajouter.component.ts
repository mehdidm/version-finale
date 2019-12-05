import { Component, OnInit, Input, Output } from "@angular/core";
import { ProduitService } from "../produit.service";
import { produit } from "../produit";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-ajouter",
  templateUrl: "./ajouter.component.html",
  styleUrls: ["./ajouter.component.css"]
})
export class AjouterComponent implements OnInit {
  produits = [];
  title = "Ajouter Article :";

  id: number;
  libelle = "";
  description = "";
  image = "";
  prix: number;
  nbStock: number;
  date: Date = new Date("1999-01-01");
  stock: boolean;

  indeterminate = false;
  labelPosition = "after";
  disabled = false;

  message: string = "From has been reset";
  action2: string = "";
  submit = false;
  //pr = new produit(this.id, this.libelle,this.description, this.image, this.prix ,this.nbStock, this.stock, this.date )

  ngOnInit() {
    //this.produits = this._produits.produits;
  }

  onSubmit(f: NgForm) {
    const verif: boolean = this.produitsservice.addProduit(
      this.id,
      this.libelle,
      this.description,
      "assets/" + this.image,
      this.prix,
      this.nbStock,
      this.stock,
      this.date
    );
    if (verif) {
      this.message = "Votre nouveau produit a bien été ajouté";
    } else {
      this.message = "Le produit  existe déjà »";
    }
    this.submit = true;
  }
  constructor(
    private produitsservice: ProduitService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  openSnackBar(message: string, action2: string) {
    this._snackBar.open(message + "Has been added Successfully!", action2, {
      duration: 2000
    });
  }
  openSnackBarReset(message: string, action: string) {
    this._snackBar.open(this.message, action, {
      duration: 2000
    });
  }

  /*
  add() {
    this.produits.push(this.pr);
  }
*/
}
