import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try direct Swiggy API first
      const menuAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${resId}`;
      
      const response = await fetch(menuAPI);
      
      if (!response.ok) {
        throw new Error("API failed");
      }
      
      const json = await response.json();
      console.log("API Response:", json);
      
      if (json?.data) {
        setResInfo(json.data);
        setLoading(false);
        return;
      } else {
        throw new Error("No data in response");
      }
    } catch (err) {
      // console.log("API Error, using mock data:", err.message);
      
      // Mock data WITHOUT imageIds (will use fallback images)
      setResInfo({
        cards: [
          {
            card: {
              card: {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                  id: resId,
                  name: "Delicious Restaurant",
                  city: "Greater Noida",
                  slugs: {
                    restaurant: "delicious-restaurant",
                    city: "noida"
                  },
                  cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                  locality: "Sector 18",
                  areaName: "Greater Noida West",
                  costForTwo: "30000",
                  costForTwoMessage: "₹300 for two",
                  cuisines: ["North Indian", "Chinese", "Continental", "Beverages"],
                  avgRating: 4.3,
                  feeDetails: {},
                  avgRatingString: "4.3",
                  totalRatingsString: "1K+ ratings",
                  sla: {
                    deliveryTime: 35,
                    minDeliveryTime: 30,
                    maxDeliveryTime: 40,
                    lastMileTravel: 3.5,
                    slaString: "30-40 mins"
                  },
                  availability: {
                    opened: true,
                    restaurantClosedMeta: {}
                  }
                }
              }
            }
          },
          {
            groupedCard: {
              cardGroupMap: {
                REGULAR: {
                  cards: [
                    {
                      card: {
                        card: {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "⭐ Recommended",
                          itemCards: [
                            {
                              card: {
                                info: {
                                  id: "rec1",
                                  name: "Paneer Butter Masala",
                                  category: "Main Course",
                                  description: "Rich and creamy paneer curry cooked in tomato gravy with butter and cream. A perfect vegetarian delight!",
                                  price: 25000,
                                  defaultPrice: 25000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "156"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "rec2",
                                  name: "Chicken Biryani",
                                  category: "Main Course",
                                  description: "Aromatic basmati rice cooked with tender chicken pieces, exotic spices and saffron. Served with raita.",
                                  price: 35000,
                                  defaultPrice: 35000,
                                  isVeg: 0,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "289"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "rec3",
                                  name: "Dal Makhani",
                                  category: "Main Course",
                                  description: "Creamy black lentils slow cooked overnight with butter, cream and aromatic spices",
                                  price: 20000,
                                  defaultPrice: 20000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "198"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "rec4",
                                  name: "Veg Hakka Noodles",
                                  category: "Main Course",
                                  description: "Stir-fried noodles with fresh vegetables and Asian sauces",
                                  price: 18000,
                                  defaultPrice: 18000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "167"
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      card: {
                        card: {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "🥘 Starters",
                          itemCards: [
                            {
                              card: {
                                info: {
                                  id: "start1",
                                  name: "Paneer Tikka",
                                  category: "Starters",
                                  description: "Cottage cheese marinated in spices and grilled to perfection in tandoor",
                                  price: 18000,
                                  defaultPrice: 18000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "234"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "start2",
                                  name: "Chicken 65",
                                  category: "Starters",
                                  description: "Spicy deep fried chicken tossed with curry leaves and special spices",
                                  price: 22000,
                                  defaultPrice: 22000,
                                  isVeg: 0,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "187"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "start3",
                                  name: "Veg Spring Rolls",
                                  category: "Starters",
                                  description: "Crispy golden rolls stuffed with fresh mixed vegetables and served with sweet chili sauce",
                                  price: 15000,
                                  defaultPrice: 15000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "156"
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      card: {
                        card: {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "🍞 Breads",
                          itemCards: [
                            {
                              card: {
                                info: {
                                  id: "bread1",
                                  name: "Butter Naan",
                                  category: "Breads",
                                  description: "Soft leavened bread brushed with butter, baked in traditional tandoor",
                                  price: 5000,
                                  defaultPrice: 5000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "421"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "bread2",
                                  name: "Garlic Naan",
                                  category: "Breads",
                                  description: "Naan topped with fresh minced garlic and coriander leaves",
                                  price: 6000,
                                  defaultPrice: 6000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "378"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "bread3",
                                  name: "Tandoori Roti",
                                  category: "Breads",
                                  description: "Whole wheat flatbread baked in traditional clay oven",
                                  price: 4000,
                                  defaultPrice: 4000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "289"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "bread4",
                                  name: "Lachha Paratha",
                                  category: "Breads",
                                  description: "Multi-layered whole wheat flatbread with butter",
                                  price: 7000,
                                  defaultPrice: 7000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "201"
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      card: {
                        card: {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "🥤 Beverages",
                          itemCards: [
                            {
                              card: {
                                info: {
                                  id: "bev1",
                                  name: "Fresh Lime Soda",
                                  category: "Beverages",
                                  description: "Refreshing lime soda with a twist of mint and ice",
                                  price: 8000,
                                  defaultPrice: 8000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "156"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "bev2",
                                  name: "Mango Lassi",
                                  category: "Beverages",
                                  description: "Sweet and creamy yogurt drink blended with fresh mango pulp",
                                  price: 10000,
                                  defaultPrice: 10000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "312"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "bev3",
                                  name: "Cold Coffee",
                                  category: "Beverages",
                                  description: "Chilled coffee blended with milk, sugar and topped with vanilla ice cream",
                                  price: 12000,
                                  defaultPrice: 12000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "198"
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      card: {
                        card: {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "🍰 Desserts",
                          itemCards: [
                            {
                              card: {
                                info: {
                                  id: "des1",
                                  name: "Gulab Jamun (2 pcs)",
                                  category: "Desserts",
                                  description: "Soft milk solids dumplings deep fried and soaked in rose flavored sugar syrup",
                                  price: 9000,
                                  defaultPrice: 9000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "267"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "des2",
                                  name: "Chocolate Brownie with Ice Cream",
                                  category: "Desserts",
                                  description: "Warm chocolate brownie served with a scoop of vanilla ice cream",
                                  price: 15000,
                                  defaultPrice: 15000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "189"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              card: {
                                info: {
                                  id: "des3",
                                  name: "Rasgulla (3 pcs)",
                                  category: "Desserts",
                                  description: "Soft cottage cheese balls soaked in light sugar syrup",
                                  price: 8000,
                                  defaultPrice: 8000,
                                  isVeg: 1,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "134"
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      });
      
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  return { resInfo, loading, error };
};

export default useRestaurantMenu;