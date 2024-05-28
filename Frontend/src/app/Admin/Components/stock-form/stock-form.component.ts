import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent {

  constructor(private product:ProductServiceService, private user:UserService){}

  ngOnInit() {
    this.getProductList();
    this.getsellerList();
  }

  stockForm = new FormGroup({
    productId : new FormControl('',[Validators.required]),
    storeId : new FormControl('',[Validators.required]),
    manufacturingDate : new FormControl('',[Validators.required]),
    expiryDate : new FormControl('',[Validators.required]),
    quantity : new FormControl('',[Validators.required]),
    minLimit : new FormControl('',[Validators.required]),
    UOM : new FormControl('',[Validators.required]),
  })

  get stockformControls(){
    return this.stockForm.controls;
  }

  productList:any;
  selectedProduct:any;

  sellersList:any;
  selectedSeller:any;

  getProductList(){
    this.product.getProducts().subscribe((res:any)=>{
      console.log("Product List",res);
      this.productList=res;
    })
  }

  getId(event: Event): void {
    this.selectedProduct = (event.target as HTMLSelectElement).value;
    console.log('Selected Product ID:', this.selectedProduct);
    // You can perform other actions with the selectedProductId here
  }

  getsellerList(){
    this.user.getSellersList().subscribe((res:any)=>{
      console.log("List of sellers",res);
      this.sellersList = res;
    })
  }

  getSeller(event: Event): void {
    this.selectedSeller = (event.target as HTMLSelectElement).value;
    console.log('Selected Seller ID:', this.selectedSeller);
    // You can perform other actions with the selectedProductId here
  }

  standardUOMs = [
    "Piece (pc)",
    "Pack (pk)",
    "Box (bx)",
    "Carton (ct)",
    "Dozen (dz)",
    "Gross (gr)",
    "Hundred (hd)",
    "Thousand (th)",
    "Gram (g)",
    "Kilogram (kg)",
    "Milligram (mg)",
    "Liter (L)",
    "Milliliter (mL)",
    "Centiliter (cL)",
    "Gallon (gal)",
    "Pint (pt)",
    "Quart (qt)",
    "Ounce (oz)",
    "Pound (lb)",
    "Meter (m)",
    "Centimeter (cm)",
    "Millimeter (mm)",
    "Inch (in)",
    "Foot (ft)",
    "Yard (yd)",
    "Square Meter (sqm)",
    "Square Foot (sqft)",
    "Cubic Meter (cbm)",
    "Cubic Foot (cuft)",
    "Barrel (bbl)",
    "Each (ea)",
    "Set (set)",
    "Bundle (bdl)",
    "Roll (rl)",
    "Pair (pr)",
    "Case (cs)",
    "Bag (bg)",
    "Can (can)",
    "Bottle (btl)",
    "Tube (tube)",
    "Sheet (sht)",
    "Ream (ream)",
    "Pad (pad)"
  ];

  selectedUOM: string = '';

  onChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedUOM = selectElement.value;
    console.log('Selected UOM:', this.selectedUOM);
  }

  inwardStock(data:any){
    console.log("Stock Form Data:",data);
    
  }

}
